import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

function UserInfoScreen() {
  const [userToken, setUserToken] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const navigation = useNavigation();
  const onGoLogout = async () => {
    try {
      const userData = await AsyncStorage.removeItem('userData');
      console.log(userData);
      Alert.alert('로그아웃이 완료되었습니다', '  ', [
        {text: '확인', onPress: () => navigation.replace('SplashScreen')},
      ]);
    } catch (e) {}
  };
  const onGoDelete = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      alert('삭제가 완료되었습니다');
    } catch (e) {}
  };
  const onGoSplash = () => {
    navigation.navigate('SplashScreen');
  };

  async function load() {
    try {
      const userDatas = await AsyncStorage.getItem('userData');
      const saveduserDatas = JSON.parse(userDatas);

      setUserToken(saveduserDatas.token);
      setUserNickname(saveduserDatas.nickname);
    } catch (e) {}
  }
  load();

  return (
    <View>
      <Button title="로그아웃" onPress={onGoLogout} />
      <Button title="데이터삭제" onPress={onGoDelete} />
      <Button title="경로테스트!" onPress={onGoSplash} />
      <Text>usertoken:{userToken}</Text>
      <Text>nickName:{userNickname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default UserInfoScreen;
