import React, {useContext, useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
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
//import SplashScreen from 'react-native-splash-screen';
//import Input  from '~/Components/Input';
//import Button from '~/Components/Button';
//import Slider from "@react-native-community/slider";
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const Container = Styled.View``;

const ListScreen = ({route, navigation}) => {
  /*  const [userToken, setUserToken] = useState('');
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
  }, []); */

  const {gtype, keyword} = route.params;
  /*   const gtype = route.prams.gtype;
  const keyword =  route.prams.keyword; */
  const [feedList, setData] = useState('');

  if (gtype == 'keyword') {
    var params = {
      keyword: keyword, //gtype=main, keyword=userToken
    };
  } else {
    var params = {
      search: keyword,
    };
  }

  const url = 'http://3.34.32.228:5000/api/mountInfo/' + gtype;
  console.log(url);

  const _callApi = async () => {
    //setLoading(true); //추가한 부분
    try {
      const res = await axios.post(url, params);

      console.log('res.data.result[0]===>' + res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    _callApi();
  }, []);

  return (
    <Container style={{marginTop: 58}}>
      <View style={{paddingHorizontal: 15}}>
        <FlatList
          data={feedList.slice(0, feedList.length)}
          keyExtractor={(item, index) => {
            return `image-feed-${index}`;
          }}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 5,
                backgroundColor: '#fafafa',
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailPage', {
                    mntnnm: item.mntnnm,
                    x: item.x,
                    y: item.y,
                    keyword: item.keyword,
                    hndfmsmtnslctnrson: item.hndfmsmtnslctnrson,
                  })
                }>
                <View
                  style={{
                    flexShrink: 0,
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                  <Image
                    style={{zIndex: 5, width: 200, height: 100}}
                    source={{uri: item.mntnattchimageseq}}></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  }}>
                  <Text style={{fontSize: 14, color: '#111'}}>
                    {item.mntnnm}
                  </Text>
                  <Text style={{marginTop: 5, fontSize: 14, color: '#666'}}>
                    {item.hndfmsmtnslctnrson}
                  </Text>
                  <View
                    style={{
                      marginTop: 25,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 13, color: '#666'}}>Info</Text>
                    <Text
                      style={{marginLeft: 30, fontSize: 13, color: '#0055e0'}}>
                      리뷰 보기
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* <View style={{flexDirection:'row',marginBottom:10,borderWidth:1,borderColor:'#ddd',borderRadius:5,backgroundColor:'#fafafa'}}>
          <TouchableOpacity onPress={() => navigation.navigate('DetailPage')}>
            <View style={{flexShrink:0,width:100,alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
              <Image 
              resizeMode='contain' 
              style={{zIndex:5,width:160,height:100}}  
              source={require('./Assets/Images/Common/san2.jpg')}
              />
            </View>
            <View style={{flex:1,flexDirection:'column',paddingVertical:10,paddingHorizontal:20}}>
              <Text style={{fontSize:14,color:'#111'}}>설악산</Text>
              <Text style={{marginTop:5,fontSize:14,color:'#666'}}>강원도 인제군 북면 한계리</Text>
              <View style={{marginTop:25,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:13,color:'#666'}}>Info</Text>
                <Text style={{marginLeft:30,fontSize:13,color:'#0055e0'}}>리뷰 보기</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginBottom:10,borderWidth:1,borderColor:'#ddd',borderRadius:5,backgroundColor:'#fafafa'}}>
          <TouchableOpacity onPress={() => navigation.navigate('DetailPage')}>
            <View style={{flexShrink:0,width:100,alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
              <Image 
              resizeMode='contain' 
              style={{zIndex:5,width:160,height:100}}  
              source={require('./Assets/Images/Common/san3.jpg')}
              />
            </View>
            <View style={{flex:1,flexDirection:'column',paddingVertical:10,paddingHorizontal:20}}>
              <Text style={{fontSize:14,color:'#111'}}>한라산</Text>
              <Text style={{marginTop:5,fontSize:14,color:'#666'}}>제주 서귀포시 토평동 산 15-1</Text>
              <View style={{marginTop:25,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:13,color:'#666'}}>Info</Text>
                <Text style={{marginLeft:30,fontSize:13,color:'#0055e0'}}>리뷰 보기</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View> */}
      </View>
    </Container>
  );
};

export default ListScreen;
