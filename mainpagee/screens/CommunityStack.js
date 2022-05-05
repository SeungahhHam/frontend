import React, { useContext, useState, useEffect } from 'react';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert,TouchableOpacity } from 'react-native';
//import Styled from "styled-components/native";
import axios from "axios";
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper'


//const Container = Styled.View``;

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed33'>;

interface Props {
  navigation: NavigationProp;
}

const Page8 = ({ navigation }: Props) => {

  return (
    <View style={{marginTop:58,}}>
      <ScrollView style={{flexDirection:'column',height:'100%',backgroundColor:'#ffffff'}}>
        {/* <View style={{padding:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{width:30,height:30,borderRadius:24,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,color:'#FFF'}}>SOS</Text>
          </View>
          <View>
            <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>로고</Text>
          </View>
          <View style={{width:30,height:30,borderRadius:24,backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,color:'#FFF'}}>My</Text>
          </View>
        </View>
        <View style={{marginBottom:50,paddingHorizontal:15,paddingTop:25,}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{marginRight:10,width:80,height:80,borderRadius:40,backgroundColor:'#aaa',flexShrink:0,alignItems:'center',justifyContent:'center'}}>
              <Text>프로필</Text>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
              <View style={{width:'100%',height:12,borderRadius:8,backgroundColor:'#eee',overflow:'hidden'}}>
                <View style={{position:'absolute',top:0,left:0,bottom:0,borderRadius:8,width:'60%',backgroundColor:'#02dbb4'}}></View>
              </View>
            </View>
          </View>
        </View> */}
        <View style={{marginBottom:20,paddingHorizontal:15}}>
          <View style={{flexDirection:'row',flexWrap:'wrap',marginHorizontal:-5}}>
          <View style={{width:'33.33%',paddingHorizontal:5,paddingBottom:15,flexDirection:'column',alignItems:'center'}}>
              <Text style={{minWidth:100,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4',textAlign:'center'}}>배지1</Text>
              <Text style={{marginVertical:15,textAlign:'center'}}>아이콘{'\n'}이미지 1</Text>
              <Text style={{fontSize:18,color:'#111',textAlign:'center'}}>28%</Text>
            </View>
            <View style={{width:'33.33%',paddingHorizontal:5,paddingBottom:15,flexDirection:'column',alignItems:'center'}}>
              <Text style={{minWidth:100,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4',textAlign:'center'}}>배지2</Text>
              <Text style={{marginVertical:15,textAlign:'center'}}>아이콘{'\n'}이미지 2</Text>
              <Text style={{fontSize:18,color:'#111',textAlign:'center'}}>45%</Text>
            </View>
            <View style={{width:'33.33%',paddingHorizontal:5,paddingBottom:15,flexDirection:'column',alignItems:'center'}}>
              <Text style={{minWidth:100,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4',textAlign:'center'}}>배지3</Text>
              <Text style={{marginVertical:15,textAlign:'center'}}>아이콘{'\n'}이미지 3</Text>
              <Text style={{fontSize:18,color:'#111',textAlign:'center'}}>69%</Text>
            </View>
            <View style={{width:'33.33%',paddingHorizontal:5,paddingBottom:15,flexDirection:'column',alignItems:'center'}}>
              <Text style={{minWidth:100,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4',textAlign:'center'}}>배지4</Text>
              <Text style={{marginVertical:15,textAlign:'center'}}>아이콘{'\n'}이미지 4</Text>
              <Text style={{fontSize:18,color:'#111',textAlign:'center'}}>12%</Text>
            </View>
            <View style={{width:'33.33%',paddingHorizontal:5,paddingBottom:15,flexDirection:'column',alignItems:'center'}}>
              <Text style={{minWidth:100,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4',textAlign:'center'}}>배지5</Text>
              <Text style={{marginVertical:15,textAlign:'center'}}>아이콘{'\n'}이미지 5</Text>
              <Text style={{fontSize:18,color:'#111',textAlign:'center'}}>89%</Text>
            </View>
            <View style={{width:'33.33%',paddingHorizontal:5,paddingBottom:15,flexDirection:'column',alignItems:'center'}}>
              <Text style={{minWidth:100,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4',textAlign:'center'}}>배지6</Text>
              <Text style={{marginVertical:15,textAlign:'center'}}>아이콘{'\n'}이미지 6</Text>
              <Text style={{fontSize:18,color:'#111',textAlign:'center'}}>33%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Page8;
