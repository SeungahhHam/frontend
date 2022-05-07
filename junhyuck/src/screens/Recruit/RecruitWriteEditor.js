import React, {useRef, useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

function RecruitWriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const bodyRef = useRef();
  const [peopleValue, setpeopleValue] = useState(' ');
  const [sexValue, setSexValue] = useState(' ');
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <View style={styles.container}>
        <Picker
          peopleValue={peopleValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setpeopleValue(itemValue)}>
          <Picker.Item label="인원" value=" " />
          <Picker.Item label="1명" value="1" />
          <Picker.Item label="2명" value="2" />
          <Picker.Item label="3명" value="3" />
          <Picker.Item label="4명" value="4" />
          <Picker.Item label="5명" value="5" />
        </Picker>
        <Picker
          psexValue={sexValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSexValue(itemValue)}>
          <Picker.Item label="성별" value=" " />
          <Picker.Item label="남성" value="male" />
          <Picker.Item label="여성" value="female" />
          <Picker.Item label="상관없음" value="all" />
        </Picker>
      </View>
      <TextInput
        placeholder="내용을 입력하세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  container: {
    flexDirection: 'row',
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default RecruitWriteEditor;
