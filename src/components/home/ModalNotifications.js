import React, {useContext} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../../constants';
import {AppContext} from '../../context/AppContext';
import {GLOBALS} from '../../styles';

const ModalNotifications = () => {
  const {modal} = useContext(AppContext);
  const {modalIsOpen, setModalIsOpen} = modal;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalIsOpen}
      onRequestClose={() => {
        setModalIsOpen(!modalIsOpen);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.title}>Tus notificaciones</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalIsOpen(!modalIsOpen)}>
              <Icon name="times" color={COLORS.black} size={32} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalNotifications;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    backgroundColor: COLORS.background,
    borderRadius: 15,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 40,
    height: 40,
  },

  title: {
    ...GLOBALS.semiBoldFamily,
    fontSize: SIZES.medium,
  },
});
