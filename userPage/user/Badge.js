import React, {useEffect, useState} from 'react';
import {
  View, StyleSheet, 
  Text, Image,
  TouchableOpacity, Alert
} from 'react-native';
import {BASE_URL} from '../../config';
import {useIsFocused} from '@react-navigation/native';

{/*뱃지 번호를 위한 props*/}
function Badge() {
  //뱃지 이름을 위한 변수
  const [list, setLists] = useState([]);
  const isFocused = useIsFocused();
  
    useEffect(() => {
      fetch(`${BASE_URL}/api/user/auth`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: 'eyJhbGciOiJIUzI1NiJ9.NjI3MWZmODI0YzQ5ODA0NzRhODkxYjhm.nR6p6n_7Xu0hRTm4BaDtr6IRVg2dXXoKFmf20k04n1s' }),
      })
        .then(response => response.json())
        .then(json => setLists(json))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
  },[isFocused] ); 

  // {list.badge[parseInt(props.num)]}
  return(
    <View>
        {/*뱃지 이름*/}
        <View style={styles.btName}>
          <Text style={styles.btNameText}></Text>
        </View>
        {/*뱃지*/}
        <TouchableOpacity activeOpacity={0.5} onPress={() => Alert.alert('Clicked!!')}>
          <Image
            source={require('../../Assets/images/mountain.png')}
            style={styles.button}
          />
        </TouchableOpacity>
        {/*뱃지 획득 여부*/}
        <Text style={styles.btProgress}>획득</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    button: {
      alignItems: 'center',
      height: 100,
      width: 100,
      resizeMode: 'contain',
    },
});

export default Badge;