import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, 
  ScrollView
} from 'react-native';

import {BASE_URL} from '../../config';
import {useIsFocused} from '@react-navigation/native';
import Badge from '../user/Badge';

//탭 메뉴 중에 뱃지 탭
function BadgeTab() {
  //뱃지 이름을 위한 변수
  const [list, setLists] = useState([]);
  const isFocused = useIsFocused();
  const [userToken, setUserToken] = useState('');
  
  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const userDatas = await AsyncStorage.getItem('userData'); //토큰과 아이디
  //       const saveduserDatas = JSON.parse(userDatas);
  //       setUserToken(saveduserDatas.token);
  //       setUserNickname(saveduserDatas.nickname);
  //     } catch (e) {}
  //   }
  //   load();
  // }, []);

  // useEffect(() => {
  //   fetch(`${BASE_URL}/api/user/badgeInfo`,{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({token: 'eyJhbGciOiJIUzI1NiJ9.NjI3OGU5OWJkMmFjNTRlNWUwMmQ0NmI3.M--TK0EY39EzVpnGjhyc1hLqLRCDCTi1DZqVruH3d-A'}),
  //   })
  //     .then(response => response.json())
  //     .then(json => setLists(json))
  //     .catch(error => console.error(error))
  // },[isFocused] );
  
  useEffect(() => {    
    async function load() {
      try {
        await AsyncStorage.getItem('userData', (err, result) => {  
          const saveduserDatas = JSON.parse(result);
          fetch(`${BASE_URL}/api/user/badgeInfo`,{
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

  useEffect(() => {console.log(list)})

  return (
    <View>
      <ScrollView>
        <View style={styles.btList}>
          {
            list.map(badge => (
              <Badge
                name={badge.mntnnm}
                image={badge.mntnattchimageseq}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-around',
    alignContent: 'space-between'
  },
});

export default BadgeTab;