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
//import Styled from "styled-components/native";
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
//import Geolocation from '@react-native-community/geolocation';npm
import Geolocation from 'react-native-geolocation-service';

//const Container = Styled.View``;

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Example App',
        message: 'Example App access to your location ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      //alert("You can use the location");
    } else {
      console.log('location permission denied');
      //alert("Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

const MapScreen = ({navigation}) => {
  requestLocationPermission();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLogitude] = useState(null);

  // const geoLocation = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     (location) => {
  //       console.log('location ', location);
  //       if (this.validLocation(location.coords)) {
  //         this.locationToAddress(location.coords);
  //       }
  //     },
  //     (error) => {
  //       console.log('request location error', error);
  //     },
  //     Platform.OS === 'android' ? {} : { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000  }
  //   );
  // }

  const geoLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        //console.log(latitude);
        //console.log(longitude);
        setLatitude(parseFloat(latitude));
        setLogitude(parseFloat(longitude));
      },
      error => {
        console.log('errrrrr');
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    // <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    //   <Text style={[styles.title, textColor]}>{item.title}</Text>
    // </TouchableOpacity>

    <View style={{marginBottom: 15}}>
      <Image
        resizeMode="cover"
        style={{width: '100%', height: 300, zIndex: 5}}
        source={require('../Assets/images/asend_report_img.png')}
      />
    </View>
  );

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <View style={{marginTop: 58}}>
      <ScrollView
        style={{
          flexDirection: 'column',
          height: '100%',
          backgroundColor: '#ffffff',
        }}>
        <View
          style={{
            marginBottom: 50,
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
            <View
              style={{
                flexShrink: 0,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#eee',
              }}>
              <Text style={{textAlign: 'center', color: '#111', fontSize: 12}}>
                돋보기
              </Text>
            </View>

            <View style={{flex: 1, height: 40}}>
              <TextInput />
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
            paddingHorizontal: 34,
            paddingTop: 40,
            paddingBottom: 40,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View>
            <Text> latitude: {latitude} </Text>
            <Text> longitude: {longitude} </Text>
            <TouchableOpacity onPress={() => geoLocation()}>
              <Text> Get GeoLocation </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexcolumn2: {flexDirection: 'column', marginTop: 50},
  formdl: {marginBottom: 25, flexDirection: 'column'},
  formdt: {marginBottom: 10},
  formdd: {flexDirection: 'row'},
  formTit: {paddingHorizontal: 15, lineHeight: 15, fontSize: 12, color: '#000'},
  formInput: {
    flex: 1,
    paddingHorizontal: 15,
    height: 48,
    lineHeight: 48,
    fontSize: 15,
    color: '#444',
    backgroundColor: '#f2f2f1',
    borderRadius: 10,
  },
  formTextarea: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 114,
    lineHeight: 48,
    fontSize: 15,
    color: '#444',
    backgroundColor: '#f2f2f1',
    borderRadius: 10,
  },
  formSelect: {
    paddingHorizontal: 15,
    height: 48,
    lineHeight: 48,
    fontSize: 15,
    color: '#444',
    backgroundColor: '#f2f2f1',
    borderRadius: 10,
  },
  formBtn: {
    marginLeft: 12,
    flexShrink: 0,
    flexBasis: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#a8a8a8',
    height: 48,
    lineHeight: 48,
    fontSize: 14,
    borderRadius: 10,
    textAlign: 'center',
  },
  formError: {
    marginTop: 8,
    paddingHorizontal: 15,
    lineHeight: 14,
    fontSize: 12,
    color: '#ff3c51',
  },
  formDrop: {position: 'absolute', top: '50%', right: 20, marginTop: -6},

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
  wrapper: {height: 300},

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

export default MapScreen;
