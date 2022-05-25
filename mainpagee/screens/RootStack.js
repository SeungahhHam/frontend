import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import UserInfo from './UserInfoScreen';
import Login from './LoginScreen';
import Register from './RegisterScreen';
import SplashScreen from './SplashScreen';
import Keyword from './KeywordScreen';
import ListPage from './ListScreen';
import DetailPage from './DetailScreen';
import MapPage  from './MapScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TransparentCircleButton from '../components/TransparentCircleButton';
import {StyleSheet, View, Text, Button, Alert, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen*/}
      {/*  name="Logout"*/}
      {/*  component={LogoutScreen}*/}
      {/*  options={{headerShown: false}}*/}
      {/*/>*/}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Keyword"
        component={Keyword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function RootStack() {
  const navigation = useNavigation();
  const onGoLogin = () => {
    navigation.navigate('Auth');
  };
  const onGoLogout = async () => {
    try {
      const userData = await AsyncStorage.removeItem('userData');
      console.log(userData);
      Alert.alert('로그아웃이 완료되었습니다', '  ', [
        {text: '확인', onPress: () => navigation.navigate('SplashScreen')},
      ]);
    } catch (e) {}
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // Hiding header for Splash Screen
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
       name="ListPage" 
       component={ListPage} />
      <Stack.Screen
       name="DetailPage"
       component={DetailPage} />
      <Stack.Screen
       name="Map" 
       component={MapPage} />

      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          headerLeft: () => (
            <View style={styles.buttons}>
              <TransparentCircleButton
                name="warning"
                color="red"
                onPress={onGoLogin}
              />
            </View>
          ),
          title: <Image style={{ flex: 1, width: 50, height: 50 }} 
          source={require('../Assets/images/logo.jpg')} />,
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={styles.buttons}>
              <TransparentCircleButton
                name="logout"
                color="#009688"
                onPress={onGoLogout}
              />
            </View>
          ),

          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    zIndex: 0,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RootStack;
