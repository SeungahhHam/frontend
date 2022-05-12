import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from './FeedsScreen';
import CommunityStack from './CommunityStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet, Linking} from 'react-native';
import TransparentCircleButton from '../components/TransparentCircleButton';
import {useNavigation} from '@react-navigation/native';
import CameraButton from '../components/CameraButton';
import AsyncStorage from '@react-native-community/async-storage';

const Tab = createBottomTabNavigator();

function MainTab() {
  const navigation = useNavigation();
  const onGoUser = () => {
    navigation.navigate('UserInfo');
  };
  const onGoLogin = () => {
    navigation.navigate('Auth');
  };
  const onGoHelp = () => {
    {
      Linking.openURL('tel:01023039598');
    }
  };

  return (
    <>
      <View style={styles.block}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#009688',
          }}>
          <Tab.Screen
            name="Feeds"
            component={FeedScreen}
            options={{
              headerLeft: () => (
                <View style={styles.buttons}>
                  <TransparentCircleButton
                    name="warning"
                    color="red"
                    onPress={onGoHelp}
                  />
                </View>
              ),
              title: '로고!!!',
              headerTitleAlign: 'center',
              headerRight: () => (
                <View style={styles.buttons}>
                  <TransparentCircleButton
                    name="person"
                    color="#009688"
                    onPress={onGoUser}
                  />
                </View>
              ),

              tabBarIcon: ({color, size}) => (
                <Icon name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Community"
            component={CommunityStack}
            options={{
              headerLeft: () => (
                <View style={styles.buttons}>
                  <TransparentCircleButton name="warning" color="red" />
                </View>
              ),
              title: '로고',
              headerTitleAlign: 'center',
              headerRight: () => (
                <View style={styles.buttons}>
                  <TransparentCircleButton
                    name="person"
                    color="#009688"
                    onPress={onGoUser}
                  />
                </View>
              ),

              tabBarIcon: ({color, size}) => (
                <Icon name="people" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
      <CameraButton />
    </>
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

export default MainTab;
