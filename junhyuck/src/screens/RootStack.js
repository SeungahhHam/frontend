import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import UserInfo from './UserInfoScreen';
import Login from './LoginScreen';
import Register from './RegisterScreen';
import SplashScreen from './SplashScreen';
import Keyword from './KeywordScreen';

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

      <Stack.Screen name="UserInfo" component={UserInfo} />
    </Stack.Navigator>
  );
}

export default RootStack;
