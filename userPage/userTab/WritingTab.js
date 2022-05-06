import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView,} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import FreeList from '../components/FreeListItem';
import {BASE_URL} from '../../config';

function WritingTab() {
  const [lists, setLists] = useState([]);
  const isFocused = useIsFocused();

  //fetch(`${BASE_URL}/api/user/bordC`
  useEffect(() => {
    fetch(`${BASE_URL}/api/user/bord`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token: 'eyJhbGciOiJIUzI1NiJ9.NjI3MWZmODI0YzQ5ODA0NzRhODkxYjhm.nR6p6n_7Xu0hRTm4BaDtr6IRVg2dXXoKFmf20k04n1s' }),
    })
      .then(response => response.json())
      .then(json => setLists(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [isFocused]);

  return (
    <View style={styles.block}>
      <ScrollView>
        <View style={styles.item}>
          {(
            lists
              .reverse()
              .map(free => (
                <FreeList
                  date={free.time}
                  title={free.title}
                  body={free.text}
                  id={free.id}
                />
              ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
  },
  semiblock: {
    alignItems: 'center',
  },
  block2: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    color: '#546e7a',
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});

export default WritingTab;