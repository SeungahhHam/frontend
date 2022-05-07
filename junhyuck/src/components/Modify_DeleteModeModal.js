import React from 'react';
import {StyleSheet, Modal, View, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Moidfy_DeleteModeModal({visible, onClose, onAskDelete}) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <Pressable style={styles.background} onPress={onClose}>
        <View style={styles.whiteBox}>
          <Pressable
            style={styles.actionButton}
            onPress={() => {}}
            android_ripple={{color: '#eee'}}>
            <Icon name="edit" color="#757575" size={24} style={styles.icon} />
            <Text style={styles.actionText}>수정하기</Text>
          </Pressable>
          <Pressable
            style={styles.actionButton}
            onPress={() => {
              onAskDelete();
              onClose();
            }}
            android_ripple={{color: '#eee'}}>
            <Icon
              name="delete-forever"
              color="red"
              size={24}
              style={styles.icon}
            />
            <Text style={styles.actionText}>삭제하기</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBox: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 2,
  },
  actionButton: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default Moidfy_DeleteModeModal;
