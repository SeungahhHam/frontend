import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RecruitWriteEditor from './RecruitWriteEditor';
import WriteHeader from '../../components/WriteHeader';
import {v4 as uuidv4} from 'uuid';
import {BASE_URL} from '../../config';
import AsyncStorage from '@react-native-community/async-storage';

function RecruitWriteScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userToken, setUserToken] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    async function load() {
      try {
        const userDatas = await AsyncStorage.getItem('userData'); //토큰과 아이디
        const saveduserDatas = JSON.parse(userDatas);
        setUserToken(saveduserDatas.token);
        setUserNickname(saveduserDatas.nickname);
      } catch (e) {}
    }
    load();
  }, []);

  const onSave = () => {
    if (!title) {
      alert('제목을 입력해주세요');
      return;
    }
    if (!body) {
      alert('내용을 입력해주세요');
      return;
    }

    var dataToSend = {
      title: title,
      text: body,
      time: new Date().toISOString(),
      _id: uuidv4(),
      token: userToken,
      nickname: userNickname,
    };

    console.log(dataToSend);

    fetch(`${BASE_URL}/api/community/recruit/init`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    }).then(async res => {
      try {
        const jsonRes = await res.json();
        console.log(jsonRes);
        console.log('yes');
        navigation.pop();
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader onSave={onSave} />
      <RecruitWriteEditor
        title={title}
        body={body}
        onChangeTitle={setTitle}
        onChangeBody={setBody}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default RecruitWriteScreen;
