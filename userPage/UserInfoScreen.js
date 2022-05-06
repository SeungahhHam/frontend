import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { TabRouter } from 'react-navigation';
import {useIsFocused} from '@react-navigation/native';

import UserHeader from './user/UserHeader';
import ProgressBar from './user/ProgressBar';
import Badge from './userTab/BadgeTab';
import Writing from './userTab/WritingTab';
import Picture from './userTab/PictureTab';
import {BASE_URL} from '../config';

const UserTab = createMaterialTopTabNavigator();

function UserInfoScreen() {
    const isFocused = useIsFocused();

    useEffect(() => {
        fetch(`${BASE_URL}/api/user/auth`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({token: 'eyJhbGciOiJIUzI1NiJ9.NjI2ZTc0OGJiYjExZmU3NjJjMDNlNThm.YhZWj-YJkUztyYCzxyZvuqU6QSMK2SpWNMNNqZj_Hq8' }),
        })
          .then(response => response.json())
          .then(json => //setLists(json)
                    console.log(json.name))
          .catch(error => console.error(error))
          .finally(() => setLoading(false));
    }, [isFocused]);

    return (
        <>
            {/* UserHeader: 프로필 사진, 닉네임, 자기소개 */}
            <UserHeader/>
            {/*뱃지 획득 진행률을 알 수 있는 진행바*/}
            <ProgressBar/>
            {/* UserTab: 
                Badge - 뱃지 모은 현황 부분 
                Picture - 자신이 쓴 사진 후기 글을 볼 수 있는 부분
                Writing - 자신이 커뮤니티에 쓴 글을 볼 수 있는 부분
            */}
            <UserTab.Navigator>
                <UserTab.Screen name="Badge" component={Badge}/>
                <UserTab.Screen name="Picture" component={Picture} />
                <UserTab.Screen name="Writing" component={Writing} />
            </UserTab.Navigator>
        </>
        
    );
}

export default function() {
    return (
        <NavigationContainer>
            <UserInfoScreen/>
        </NavigationContainer>
    );
}