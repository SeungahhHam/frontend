import React, {useState, useEffect} from 'react';
import {
  View, StyleSheet, 
  Text, Image,
  TouchableOpacity, Alert,
  ScrollView, FlatList
} from 'react-native';
import {BASE_URL} from '../../config';
import {useIsFocused} from '@react-navigation/native';

{/*뱃지 번호를 위한 props*/}
function Badge(props) {
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

  const badge = () => {
    return list.map((element) => {
      return (
        <View>
          <ScrollView>
            {/*뱃지 이름*/}
            <View style={styles.btName}>
              <Text style={styles.btNameText}>{element.mntnnm}</Text>
            </View>
            {/*뱃지*/}
            <Image
              source={{uri: element.mntnattchimageseq}}
              style={styles.badge}
            />
            {/*뱃지 획득 여부*/}
            <Text style={styles.btProgress}>획득</Text>
          </ScrollView>
        </View>
      )
    })
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.btList}>{badge()}</View>
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
    btList: {
      flexDirection: 'column',
      marginTop: 20,
      justifyContent: 'space-around',
    },
    btName: {
      marginLeft: 10,
      alignItems: 'center',
      width: 70,
      backgroundColor: 'rgba(0, 100, 0, 0.7)',
      borderRadius: 10,
    },
    btNameText: {
      textAlign: 'center',
      color: 'white',
    },
    btProgress: {
      textAlign: 'center',
    },
    badge: {
      alignItems: 'center',
      height: 100,
      width: 100,
      resizeMode: 'contain',
      borderRadius: 100,
    },
});

export default Badge;