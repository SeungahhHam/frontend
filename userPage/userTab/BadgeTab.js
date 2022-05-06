import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, 
  Text,
} from 'react-native';

import Badge from '../user/Badge';

//탭 메뉴 중에 뱃지 탭
function BadgeTab() {
  
  return (
    <View>
      <View style={styles.btList}>
        <Badge num="0"/>
        <Badge num="1"/>
        <Badge num="2" />
      </View>
      <View style={styles.btList}>
        <Badge num="3"/>
        <Badge num="4"/>
        <Badge num="5"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btList: {
    flexDirection: 'row',
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
  button: {
    alignItems: 'center',
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});

export default BadgeTab;