import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function App(){

  const [nome, setNome] = useState('Ângelo');
  const [input, setInput] = useState('');

  function alteraNome() {
    setNome(input);
    setInput('');
  }

  return (
    <View style={styles.container}>

      <TextInput 
      placeholder='Seu nome'
      value={input}
      onChangeText={ (text) => setInput(text) }
      />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Altera nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}> {nome} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  texto: {
    color: '#000',
    fontSize: 35,
  },
  btn: {
    backgroundColor: '#222',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
  }
})