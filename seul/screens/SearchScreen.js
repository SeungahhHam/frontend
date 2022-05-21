import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, View, Button} from 'react-native';
import FreeScreen from './Free/FreeScreen';
import QuestionScreen from './Question/QuestionScreen';
import CertificationScreen from './Certification/CertificationScreen';
import RecruitScreen from './Recruit/RecruitScreen';

const Tab = createMaterialTopTabNavigator();

function SearchScreen() {
  const tabBarOptions = {
    tabBarIndicatorStyle: '#009688',
    tabBarActiveTintColor: '#009688',
    tabBarInactiveTintColor: 'gray',
  }

  return (
    <Tab.Navigator 
      initialRouteName="Free"
      screenOptions={tabBarOptions}
    >
      <Tab.Screen
        name="free"
        component={FreeScreen}
        options={{
          headerTitleAlign: 'center',
          title: '자유게시판',
          headerBackVisible: false,
        }}
      />
      <Tab.Screen
        name="question"
        component={QuestionScreen}
        options={{
          headerTitleAlign: 'center',
          title: '질문게시판',
          headerBackVisible: false,
        }}
      />
      <Tab.Screen
        name="certify"
        component={CertificationScreen}
        options={{
          headerTitleAlign: 'center',
          title: '인증게시판',
          headerBackVisible: false,
        }}
      />
      <Tab.Screen
        name="recruit"
        component={RecruitScreen}
        options={{
          headerTitleAlign: 'center',
          title: '모집게시판',
          headerBackVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default SearchScreen;
