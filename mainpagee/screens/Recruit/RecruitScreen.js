import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import RecruitFloatingWriteButton from './RecruitFloatingWriteButton';
import SearchBar from '../../components/SearchBar';
import RecruitList from './RecruitListItem';
import {BASE_URL} from '../../config';
import {useIsFocused} from '@react-navigation/native';

function RecruitScreen({navigation}) {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const classification = 'recruit';

  useEffect(() => {
    fetch(`${BASE_URL}/api/community/recruit/list`)
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
              .map(recruit => (
                <RecruitList
                  date={recruit.time}
                  title={recruit.title}
                  body={recruit.text}
                  id={recruit._id}
                  token={recruit.token}
                  nickname={recruit.nickname}
                />
              ))
          )}
        </View>
      </ScrollView>
      <RecruitFloatingWriteButton />
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

export default RecruitScreen;
