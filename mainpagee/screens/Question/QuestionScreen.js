import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import QuestionFloatingWriteButton from './QuestionFloatingWriteButton';
import SearchBar from '../../components/SearchBar';
import QuestionList from './QuestionListItem';
import {BASE_URL} from '../../config';
import {useIsFocused} from '@react-navigation/native';

function QuestionScreen({navigation}) {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const classification = 'question';

  useEffect(() => {
    fetch(`${BASE_URL}/api/community/question/list`)
      .then(response => response.json())
      .then(json => setLists(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [isFocused]);

  return (
    <View style={styles.block}>
      <View style={styles.semiblock}>
        <SearchBar classification={classification} />
      </View>

      <ScrollView>
        <View style={styles.item}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            lists
              .reverse()
              .map(question => (
                <QuestionList
                  date={question.time}
                  title={question.title}
                  body={question.text}
                  id={question._id}
                  token={question.token}
                  nickname={question.nickname}
                />
              ))
          )}
        </View>
      </ScrollView>
      <QuestionFloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
  },
  semiblock: {
    alignItems: 'center',
  },
  block2: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    color: '#546e7a',
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});

export default QuestionScreen;
