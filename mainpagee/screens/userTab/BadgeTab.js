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
  
  //.then(json => console.log(json))
  //.then(json => setLists(json))
  useEffect(() => {
    fetch(`${BASE_URL}/api/user/badgeInfo`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token: 'eyJhbGciOiJIUzI1NiJ9.NjI3MjBmMGIyNzUyN2UzNzk2NTUzZTEz.0Zh-bg8LdbyxlRRWuCORxuRu8YCxvYG5yU5N6NYsru0' }),
    })
      .then(response => response.json())
      .then(json => setLists(json))
      .catch(error => console.error(error))
  },[isFocused] ); 

  return (
    <View>
      <View style={styles.btList}>
        <Badge/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btList: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
});

export default BadgeTab;