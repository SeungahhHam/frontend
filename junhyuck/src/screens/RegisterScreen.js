import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {BASE_URL} from '../config';
import SetupProfile from '../components/SetupProfile';

function RegisterScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordchk, setUserPasswordchk] = useState('');
  const [errortext, setErrortext] = useState('');
  const [loading, setLoading] = useState(false);

  const registerButton = () => {
    if (!userName) {
      setErrortext('이름을 입력해주세요');
      return;
    } else {
      setErrortext('');
    }
    if (!userNickname) {
      setErrortext('닉네임을 입력해주세요');
      return;
    } else {
      setErrortext('');
    }
    if (!userEmail) {
      setErrortext('이메일을 입력해주세요');
      return;
    } else {
      setErrortext('');
    }
    if (!userPassword) {
      setErrortext('비밀번호를 입력해주세요');
      return;
    } else {
      setErrortext('');
    }
    if (userPasswordchk != userPassword) {
      setErrortext('비밀번호가 일치하지 않습니다');
      return;
    } else {
      setErrortext('');
    }

    var dataToSend = {
      name: userName,
      nickname: userNickname,
      email: userEmail,
      password: userPassword,
    };

    console.log(dataToSend);

    fetch(`${BASE_URL}/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    }).then(async res => {
      try {
        const jsonRes = await res.json();
        console.log(jsonRes);
        if (jsonRes.success === true) {
          navigation.navigate('Keyword');
        } else {
          console.log('이미 가입된 이메일이 있습니다');
          setErrortext('이미 가입된 이메일이 있습니다');
        }
      } catch (err) {
        console.log(err);
      }
    });
  };
  return (
    <View style={styles.container}>
      <SetupProfile />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="이름"
          onChangeText={userName => setUserName(userName)}
        />
        <TextInput
          style={styles.input}
          placeholder="닉네임"
          onChangeText={userNickname => setUserNickname(userNickname)}
        />

        <TextInput
          style={styles.input}
          placeholder="이메일"
          onChangeText={userEmail => setUserEmail(userEmail)}
        />

        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          onChangeText={userPassword => setUserPassword(userPassword)}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="비밀번호 확인"
          onChangeText={userPasswordchk => setUserPasswordchk(userPasswordchk)}
          secureTextEntry
        />
        <Text style={styles.error}>{errortext}</Text>

        <Button title="다음" onPress={registerButton}></Button>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginBottom: 10,
  },
});

export default RegisterScreen;
