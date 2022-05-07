import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import KeywordButton from '../components/KeywordButton';

function FeedsScreen() {
  return (
    <ScrollView
      style={{
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#ffffff',
      }}>
      <View
        style={{
          marginBottom: 30,
          paddingHorizontal: 15,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 5,
            backgroundColor: '#ffffff',
          }}>
          <View style={{flex: 1, height: 40}}>
            <TextInput></TextInput>
          </View>
          <View
            style={{
              flexShrink: 0,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#eee',
            }}>
            <Icon name="search" size={20} color="#9e9e9e" />
          </View>
        </View>
      </View>

      <View
        style={{
          zIndex: 9999,
          bottom: 0,
          minHeight: 100,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: '#f2f2f2',
          width: '100%',
          paddingHorizontal: 17,
          paddingTop: 20,
          paddingBottom: 10,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Swiper style={[styles.wrapper]} showsButtons={false}>
          <View style={styles.slide1}>
            <View style={[styles.myaccountBot]}>
              <Image
                resizeMode="contain"
                style={{zIndex: 5, width: '100%', height: 270}}
                source={require('../Assets/images/user.png')}
              />
            </View>
          </View>
          <View style={styles.slide2}>
            <View style={[styles.myaccountBot]}>
              <Image
                resizeMode="contain"
                style={{zIndex: 5, width: '100%', height: 270}}
                source={require('../Assets/images/user.png')}
              />
            </View>
          </View>
          <View style={styles.slide3}>
            <View style={[styles.myaccountBot]}>
              <Image
                resizeMode="contain"
                style={{zIndex: 5, width: '100%', height: 270}}
                source={require('../Assets/images/user.png')}
              />
            </View>
          </View>
        </Swiper>
      </View>
      <KeywordButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  myaccountTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  myaccountTit: {
    lineHeight: 32,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  myaccountAct: {
    flex: 0,
    flexShrink: 1,
    paddingHorizontal: 18,
    lineHeight: 32,
    fontSize: 14,
    fontWeight: '300',
    color: '#a8a8a8',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#a8a8a8',
    backgroundColor: '#fff',
  },

  myaccountBot: {marginTop: 10, marginBottom: 10},
  myaccountdt: {
    flex: 0,
    flexShrink: 1,
    lineHeight: 20,
    paddingLeft: 15,
    fontSize: 12,
    fontWeight: '300',
    color: '#8d8d8f',
    width: 160,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  myaccountdl: {
    flexDirection: 'row',
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  myaccountdd: {
    flex: 0,
    flexShrink: 1,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'right',
    width: 250,
    marginTop: 5,
    marginBottom: 5,
  },

  bgwhite: {backgroundColor: '#ffffff'},
  wrapper: {height: 350},

  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default FeedsScreen;
