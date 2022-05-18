import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, 
  ActivityIndicator,
  ScrollView
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {BASE_URL} from '../../config';
import FreeList from '../Free/FreeListItem';

function WritingTab() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  // fetch(`${BASE_URL}/api/user/bord`,{
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({token: 'eyJhbGciOiJIUzI1NiJ9.NjI3OGU5OWJkMmFjNTRlNWUwMmQ0NmI3.M--TK0EY39EzVpnGjhyc1hLqLRCDCTi1DZqVruH3d-A' }),
  // })

  // useEffect(() => {
  //   fetch(`${BASE_URL}/api/community/free/list`)
  //     .then(response => response.json())
  //     .then(json => setLists(json))
  //     .catch(error => console.error(error))
  //     .finally(() => setLoading(false));
  // },[] );
  
  useEffect(() => {    
    async function load() {
      try {
        await AsyncStorage.getItem('userData', (err, result) => {  
          const saveduserDatas = JSON.parse(result);
          fetch(`${BASE_URL}/api/user/bord`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: saveduserDatas.token }),
          })
          .then(response => response.json())
          .then(json => setLists(json))
          .catch(error => console.error(error))
          .finally(() => setLoading(false))
        });
      } catch (e) {}
    }
    load();
  
  },[]);

  useEffect(() => {console.log(lists)})

  return (
    <View style={styles.block}>
      <ScrollView>
        <View style={styles.item}>
          {loading ? (
            <ActivityIndicator
              animating={loading}
              color="#6990F7"
              size="large"
              style={styles.activityIndicator}
            />
          ) : (
            lists
              .reverse()
              .map(free => (
                <FreeList
                  date={free.time}
                  title={free.title}
                  body={free.text}
                  id={free._id}
                  token={free.token}
                  nickname={free.nickname}
                  userImage={free.userImage}
                />
              ))
          )}
        </View>
      </ScrollView>
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

export default WritingTab;
