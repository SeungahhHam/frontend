import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab  from './MainTab';
import UserInfo from './UserInfoScreen';
import ListPage from './FeedsScreen2';
import DetailPage from './FeedsScreen3';
import MapPage  from './MapScreen';



const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />

      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="ListPage" component={ListPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="Map" component={MapPage} />
    </Stack.Navigator>
  );
}

export default RootStack;
