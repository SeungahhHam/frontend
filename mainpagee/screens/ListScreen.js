import React, { useContext, useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import Styled from 'styled-components/native';
import axios from "axios";
import {BASE_URL} from '../config'
import { useNavigation } from '@react-navigation/native';

const Container = Styled.View``;


const ListScreen = ({ route, navigation }) => {


  const { gtype, keyword } = route.params; 
  const [feedList, setData] = useState("");

  if(gtype=="keyword"){         
    var params = {        
      "keyword": keyword,        //gtype=main, keyword=userToken
    }   
  }else{    
    var params = {        
      "search": keyword,        
    }     
  }


  const url=`${BASE_URL}/api/mountInfo/`+gtype;
  console.log(url);
  
  const _callApi = async () => {

    //setLoading(true); //추가한 부분
    try {     

      const res = await axios.post( url , params );

      console.log("res.data.result[0]===>" + res.data);      
      setData(res.data);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    _callApi();
  }, []);


  return (
    <Container style={{marginTop:18}}>
     
        
     <View style={{paddingHorizontal:15}}>         

        <FlatList
              data={feedList.slice(0, feedList.length)}              
              keyExtractor={(item, index) => {
                return `image-feed-${index}`;
              }}              
              renderItem={({ item, index }) => (
                  <View style={{paddingTop: 10, flexDirection:'row',marginBottom:10,borderWidth:2,borderColor:'#009688',borderRadius:10,backgroundColor:'#fafafa'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailPage',{ mntnnm: item.mntnnm, x:item.x ,y:item.y ,keyword:item.keyword,  hndfmsmtnslctnrson: item.hndfmsmtnslctnrson })}>
                      <View style={{flexShrink:0,width:100,alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
                      <Image
                        style={{ zIndex:5,width:200,height:100}}
                        source = {{ uri: item.mntnattchimageseq}}></Image>
                      </View>
                      <View style={{flex:1,flexDirection:'column',paddingVertical:10,paddingHorizontal:20}}>
                      <Text style={{fontSize:20,color:'#009688', fontWeight: 'bold'}}>{item.mntnnm}</Text>
                      <Text style={{marginTop:5,fontSize:14,color:'#666'}}>{item.hndfmsmtnslctnrson}</Text>
                      <View style={{marginTop:25,flexDirection:'row',alignItems:'center'}}>
                      <Text style={{fontSize:13,color:'#666'}}>Info</Text>
                      <Text style={{marginLeft:30,fontSize:13,color:'#009688'}}>리뷰 보기</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
                  </View>
            )}
          />

        
        </View>
     
    </Container>
  );
};

export default ListScreen;