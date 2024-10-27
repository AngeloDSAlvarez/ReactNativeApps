import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const nomeInput = useRef(null); //referencia de obj no app

  //Component DidMount
  useEffect( () => {

    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes');

      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    } 

    getStorage();

  }, [])/

  //Component DidUpdate
  useEffect( ()=> {

    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
    }
    saveStorage();

  }, [nome] )

  function alteraNome() {
    setNome(input);
    setInput('');
  }

  function novoNome() {
    //uso do ref para referenciar alguma coisa
    nomeInput.current.focus();
  }

  // fazer isso para evitar renderizações desnecessárias
  const letrasNome = useMemo( () => nome.length, [nome] );
  console.log(letrasNome);

  return (
    <View style={styles.container}>

      <TextInput 
      placeholder='Seu nome'
      value={input}
      onChangeText={ (text) => setInput(text) }
      ref={nomeInput}
      />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Altera nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}> {nome} </Text>

      <Text style={styles.texto}> Tem {letrasNome} letras</Text>

      <TouchableOpacity onPress={novoNome}>
        <Text>Novo nome</Text>
      </TouchableOpacity>
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