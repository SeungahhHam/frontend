import React, { useContext, useState, useEffect } from 'react';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert,TouchableOpacity } from 'react-native';
import Styled from "styled-components/native";
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper'

const Container = Styled.View``;

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed33'>;

interface Props {
  navigation: NavigationProp;
}

const Page7 = ({ navigation }: Props) => {

  return (
    <Container style={{marginTop:58,}}>
      <ScrollView style={{flexDirection:'column',height:'100%',backgroundColor:'#ffffff'}}>

        <View style={{marginBottom:20,paddingHorizontal:15}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{width:50,height:50,flexShrink:0,marginRight:10,alignItems:'center',justifyContent:'center'}}>
              <Text>이미지</Text>
            </View>
            <View style={{flex:1,}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#111'}}>광교산</Text>
            </View>
            <View style={{flexShrink:0,marginLeft:10,flexDirection:'row'}}>
              <Text style={{paddingHorizontal:10,fontSize:11,color:'#666',textAlign:'center'}}>빈구름{'\n'}이미지</Text>
              <Text style={{paddingHorizontal:10,fontSize:11,color:'#666',textAlign:'center',borderLeftWidth:1,borderColor:'#efefef'}}>꽉찬 구름{'\n'}이미지</Text>
            </View>
          </View>
        </View>
        <View style={{marginBottom:20,paddingHorizontal:15}}>
          <Text style={{fontSize:16,color:"#111"}}>난이도 : ★★★</Text>
        </View>
        <View style={{flexDirection:'row',flexWrap:'wrap',marginBottom:20,paddingHorizontal:15}}>
          <Text style={{marginRight:10,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4'}}>키워드</Text>
          <Text style={{marginRight:10,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4'}}>키워드</Text>
          <Text style={{marginRight:10,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4'}}>키워드</Text>
        </View>
        <View style={{flexDirection:'column',marginBottom:20,paddingHorizontal:15}}>
          <Text style={{width:'100%',height:250,backgroundColor:"#eee",alignItems:'center',justifyContent:'center',textAlign:'center'}}></Text>
        </View>
        <View style={{flexDirection:'column',marginBottom:20,paddingHorizontal:15}}>
          <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text>
          <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text>
          <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Page7;
