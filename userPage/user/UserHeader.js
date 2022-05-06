import React, {useEffect, useState} from 'react';
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

    return(
        <View style={styles.header}>
            {/*유저가 선택한 키워드*/}
            <Text>
                {/* #{list.keyword[0]}
                    #{list.keyword[1]} */}
            </Text>
            <View>
                {/*프로필 이미지*/}
                <Image
                    source={{uri: list.userImage}}
                    style={styles.profile}
                />
            </View>
            <View style={styles.profileTxtContainer}>
                <View style={styles.profileText1}>
                    {/*닉네임*/}
                    <Text style={styles.profileName}>{list.nickname}</Text>
                    {/**/}
                    <TouchableOpacity
                        activeOpacity={0.5} 
                        onPress={() => Alert.alert('Clicked!!')}>
                        <Icon name="settings"/>
                    </TouchableOpacity>
                </View>
                {/*자기소개*/}
                <Text style={styles.profileText2}>{list.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 30,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
      },
    profile: {
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 100,
    },
    profileTxtContainer: {
        paddingLeft: 10,
    },
    profileText1: {
        paddingTop: 20,
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