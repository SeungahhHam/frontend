import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function SearchBar() {
  const {width} = useWindowDimensions();
  const [keyword, onChangeText] = useState('');
  const navigation = useNavigation();
  const onGoSearch = () => {
    navigation.navigate('FreeSearch');
  };

  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChangeText={onChangeText}
        autoFocus
      />
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={() => onChangeText('')}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={onGoSearch}>
        <Icon name="search" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});

export default SearchBar;
