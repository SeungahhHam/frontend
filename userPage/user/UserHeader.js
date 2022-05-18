import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useIsFocused} from '@react-navigation/native';
import {BASE_URL} from '../../config';

function UserHeader() {
    //유저 정보 받아오기 위한 변수
    const [list, setLists] = useState([]);
    const isFocused = useIsFocused();

    //.then(json => setLists(json))
    //.then(json => console.log(json))
    // useEffect(() => {
    //     fetch(`${BASE_URL}/api/user/auth`,{
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({token: 'eyJhbGciOiJIUzI1NiJ9.NjI3OGU5OWJkMmFjNTRlNWUwMmQ0NmI3.M--TK0EY39EzVpnGjhyc1hLqLRCDCTi1DZqVruH3d-A' }),
    //     })
    //       .then(response => response.json())
    //       .then(json => setLists(json))
    //       .catch(error => console.error(error))
    // },[isFocused] );

    useEffect(() => {    
        async function load() {
          try {
            await AsyncStorage.getItem('userData', (err, result) => {  
              const saveduserDatas = JSON.parse(result);
              fetch(`${BASE_URL}/api/user/auth`,{
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

    return(
        <View>
            {/*유저가 선택한 키워드*/}
            {/* <View style={styles.keyword}>
                <Text>
                    #{list.keyword[0]}
                    #{list.keyword[1]}
                </Text>
            </View> */}
            <View style={styles.header}>
                {/*프로필 이미지*/}
                <Image
                    source={{uri: list.userImage}}
                    style={styles.profile}
                />
                <View style={styles.profileTxtContainer}>
                    <View style={styles.profileText1}>
                        {/*닉네임*/}
                        <Text style={styles.profileName}>{list.nickname}</Text>
                    </View>
                    {/*자기소개*/}
                    <Text style={styles.profileText2}>{list.description}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
      },
    profile: {
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 80,
        width: 80,
        resizeMode: 'contain',
        borderRadius: 500,
    },
    profileTxtContainer: {
        marginLeft: 10,
    },
    profileText1: {
        paddingTop: 10,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileName: {
        marginRight: 5,
    },
    profileText2: {
        marginTop: 10,
        paddingBottom: 10,
    },  
})

export default UserHeader;