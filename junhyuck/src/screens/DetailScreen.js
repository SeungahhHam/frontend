import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import {BASE_URL} from '../config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {WebView} from 'react-native-webview';

const DetailScreen = ({route, navigation}) => {
  const {mntnnm, x, y, keyword, hndfmsmtnslctnrson} = route.params;
  //키워드정보가져오기
  const [keywordList, setData2] = useState('');
  const [loading, setLoading] = useState(true);
  var params = {
    keyword: keyword,
  };

  console.log(mntnnm); //받은값
  console.log(x); //위도
  console.log(y); //경도
  console.log(keyword); //받은값
  console.log(hndfmsmtnslctnrson); //받은값

  //날씨 정보가져오기
  const [weatherList, setData] = useState('');

  const _callApi = async () => {
    //setLoading(true); //추가한 부분
    try {
      const url =
        'https://api.openweathermap.org/data/2.5/weather?lat=' +
        x +
        '&lon=' +
        y +
        '&appid=ad2da720c1b3327d8e65121b5111d1c8';
      console.log(url);

      const res = await axios.get(url);

      console.log('res.data.result[0]===>' + res.data.weather[0].main);
      setData(res.data.weather[0].main);
    } catch (e) {
      console.log(e);
    }

    try {
      const url = `${BASE_URL}/api/mounnfo` + keyword;
      console.log(url);

      const res = await axios.get(url, params);

      console.log('res.data.result[0]===>' + res.data);
      setData2(res.data);
      console.log('Test:' + keywordList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    _callApi();
  }, []);

  const isFocused = useIsFocused();
  const [userToken, setUserToken] = useState(
    'eyJhbGciOiJIUzI1NiJ9.NjI3MWZmODI0YzQ5ODA0NzRhODkxYjhm.nR6p6n_7Xu0hRTm4BaDtr6IRVg2dXXoKFmf20k04n1s',
  );

  useEffect(() => {
    async function load() {
      try {
        const userDatas = await AsyncStorage.getItem('userData'); //토큰과 아이디
        const saveduserDatas = JSON.parse(userDatas);
        setUserToken(saveduserDatas.token);
      } catch (e) {}
    }
    load();
  }, []);

  useEffect(() => {
    console.log('');
    console.log(userToken);
    fetch(`${BASE_URL}/api/map/set`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: userToken,
        x: x,
        y: y,
      }), //item.x, item.y
    })
      .then(response => response.json())
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  });

  return (
    <ScrollView
      style={{
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#ffffff',
      }}>
      <View style={{marginBottom: 20, paddingHorizontal: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/*  <View style={{width:50,height:50,flexShrink:0,marginRight:10,alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
              <Text>이미지</Text>
            </View>
 */}
          <View style={{paddingHorizontal: 5, paddingTop: 15}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#009688'}}>
              {mntnnm}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginBottom: 20,
                paddingHorizontal: 15,
              }}
            />
          </View>

          <View style={{flexShrink: 0, marginLeft: 10, flexDirection: 'row'}}>
            {/*  <Text style={{paddingHorizontal:10,fontSize:11,color:'#666',textAlign:'center'}}>빈구름{'\n'}이미지</Text> */}
            <Text>날씨 : {weatherList}</Text>
            {weatherList === 'Clouds' ? (
              <Icon name={cloud} size={24} color={'black'} />
            ) : (
              <Text>맑음</Text>
            )}
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingBottom: 15,
        }}>
        {keyword.map((key, index) => (
          <Text
            style={{
              marginRight: 10,
              fontSize: 13,
              color: '#fff',
              borderRadius: 15,
              lineHeight: 30,
              paddingHorizontal: 10,
              backgroundColor: '#02dbb4',
            }}>
            {key}
          </Text>
        ))}
      </View>

      <View
        style={{
          flexDirection: 'column',
          marginBottom: 20,
          paddingHorizontal: 15,
        }}>
        {
          <WebView
            source={{
              uri: `${BASE_URL}/api/map/${userToken}`,
            }}
            style={{
              width: '100%',
              height: 250,
              backgroundColor: '#eee',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          />
        }
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginBottom: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            paddingHorizontal: 5,
            lineHeight: 30,
            fontSize: 17,
            color: '#009688',
          }}>
          ● 상세설명
        </Text>
        <Text>{hndfmsmtnslctnrson}</Text>
        {/* <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text>
          <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text> */}
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
