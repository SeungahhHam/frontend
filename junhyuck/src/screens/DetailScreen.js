import React, {useContext, useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import {useIsFocused} from '@react-navigation/native';

import {WebView} from 'react-native-webview';

const Container = Styled.View``;

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
  console.log('Testing:' + params.keyword);

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
      const url = 'http://3.34.32.228:5000/api/mountInfo' + keyword;
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

  useEffect(() => {
    fetch('http://3.34.32.228:5000/api/map/set', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token:
          'eyJhbGciOiJIUzI1NiJ9.NjI3MWZmODI0YzQ5ODA0NzRhODkxYjhm.nR6p6n_7Xu0hRTm4BaDtr6IRVg2dXXoKFmf20k04n1s',
        x: x,
        y: y,
      }), //item.x, item.y
    })
      .then(response => response.json())
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [isFocused]);

  /*  useEffect(() => {
    fetch(`http://3.34.32.228:5000/api/mountInfo/keyword`,{
      method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({token: 'eyJhbGciOiJIUzI1NiJ9.NjI3MWZmODI0YzQ5ODA0NzRhODkxYjhm.nR6p6n_7Xu0hRTm4BaDtr6IRVg2dXXoKFmf20k04n1s',
        keword: keyword }),  //item.x, item.y
     })
       .then(response => response.json())
       .catch(error => console.error(error))
       .finally(() => setLoading(false));
},[isFocused] );

useEffect(() => {
  _callApi();
}, []);*/

  return (
    <Container style={{marginTop: 58}}>
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
            <View style={{}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#111'}}>
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
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontSize: 11,
                  color: '#666',
                  textAlign: 'center',
                  borderLeftWidth: 1,
                  borderColor: '#efefef',
                }}>
                꽉찬 구름{'\n'}이미지
              </Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
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

        {/*  <FlatList
              data={keywordList.slice(0, keywordList.length)}
              keyExtractor={(item, index) => item + index}
                horizontal={true}
              renderItem={({ item, index }) => (
        <View style={{flexDirection:'row',flexWrap:'wrap',marginBottom:20,paddingHorizontal:15}}>
          <Text style={{marginRight:10,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4'}}>{keyword[0]}</Text>
        </View>
          )} />   */}

        {/*  <View style={{flexDirection:'row',flexWrap:'wrap',marginBottom:20,paddingHorizontal:15}}>
          <Text style={{marginRight:10,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4'}}>dd</Text>
        </View>  */}

        <View
          style={{
            flexDirection: 'column',
            marginBottom: 20,
            paddingHorizontal: 15,
          }}>
          {
            <WebView
              source={{
                uri: 'http://3.34.32.228:5000/api/map/eyJhbGciOiJIUzI1NiJ9.NjI3MWZmODI0YzQ5ODA0NzRhODkxYjhm.nR6p6n_7Xu0hRTm4BaDtr6IRVg2dXXoKFmf20k04n1s',
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
          <Text style={{paddingHorizontal: 15, lineHeight: 30, fontSize: 15}}>
            ● 상세설명
          </Text>
          <Text>{hndfmsmtnslctnrson}</Text>
          {/* <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text>
          <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text> */}
        </View>
      </ScrollView>
    </Container>
  );
};

export default DetailScreen;
