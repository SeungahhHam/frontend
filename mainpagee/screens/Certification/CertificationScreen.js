import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import CertificationFloatingWriteButton from './CertificationFloatingWriteButton';
import SearchBar from '../../components/SearchBar';
import CertificationList from './CertificationListItem';
import {BASE_URL} from '../../config';
import {useIsFocused} from '@react-navigation/native';

function CertificationScreen({navigation}) {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const classification = 'certify'; //경로 지정하기 위한 변수

  useEffect(() => {
    fetch(`${BASE_URL}/api/community/certify/list`)
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
              .map(certify => (
                <CertificationList
                  date={certify.time}
                  title={certify.title}
                  body={certify.text}
                  id={certify._id}
                  token={certify.token}
                  nickname={certify.nickname}
                />
              ))
          )}
        </View>
      </ScrollView>
      <CertificationFloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: '#F2F2F2',
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
    color: '#009688',
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

export default CertificationScreen;
