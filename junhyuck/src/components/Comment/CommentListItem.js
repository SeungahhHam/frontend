import React from 'react';
import {Pressable, StyleSheet, Text, Platform, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function CommentListItem({date, body, id, token, nickname, userImage}) {
  const navigation = useNavigation();

  return (
    <View style={styles.block}>
      <View style={[styles.head, styles.paddingBlock]}>
        <View style={styles.profile}>
          <Image
            source={
              userImage
                ? {
                    uri: userImage,
                  }
                : require('../../Assets/images/user.png')
            }
            style={styles.avator}
          />
          <View>
            <Text style={styles.displayName}>{nickname}</Text>
          </View>
        </View>
      </View>

      <View style={styles.text}>
        <Text style={styles.description}>{body}</Text>
        <Text style={styles.date}>{new Date(date).toLocaleString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    borderBottomWidth: 0.4,
    borderColor: '#bdbdbd',
  },
  avator: {
    width: 25,
    height: 25,
    borderRadius: 16,
  },

  paddingBlock: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  text: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: 'white',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  profile: {
    flexDirection: 'row',
  },
  displayName: {
    lineHeight: 18,
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 3,
    color: '#263238',
  },
  date: {
    color: '#757575',
    fontSize: 9,
  },
  id: {
    height: 0,
    width: 0,
  },
});

export default CommentListItem;
