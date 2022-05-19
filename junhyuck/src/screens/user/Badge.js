import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

function Badge({name, image}) {
  //뱃지 이름을 위한 변수
  return (
    <View>
      {/*뱃지 이름*/}
      <View style={styles.btName}>
        <Text style={styles.btNameText}>{name}</Text>
      </View>
      {/*뱃지*/}
      <Image source={{uri: image}} style={styles.badge} />
      {/*뱃지 획득 여부*/}
      <Text style={styles.btProgress}>획득</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btList: {
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  btName: {
    marginLeft: 10,
    alignItems: 'center',
    width: 70,
    backgroundColor: 'rgba(0, 100, 0, 0.7)',
    borderRadius: 10,
  },
  btNameText: {
    textAlign: 'center',
    color: 'white',
  },
  btProgress: {
    textAlign: 'center',
  },
  badge: {
    alignItems: 'center',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 100,
  },
});

export default Badge;
