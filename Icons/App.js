import React, {  } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Icons Usage</Text>

      <FontAwesome name="home" size={35} color="#11118c" />

      <FontAwesome name="user" size={25} color="#54a300" />

      <Feather name="gift" size={65} color="#7665ff" />

      <TouchableOpacity style={styles.btnYtb}>
        <FontAwesome name='youtube' size={25} color='#fff' />
        <Text style={styles.btnTxt}>Acessar canal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnYtb: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ff0000',
    borderRadius: 5
  },
  btnTxt: {
    paddingLeft: 10,
    color: '#fff',
  }
  
});
