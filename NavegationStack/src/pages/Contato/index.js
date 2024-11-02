import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato() {
    const navigation = useNavigation();

    function handleHome(){
        //voltar para o começo da pilha
        navigation.dispatch(StackActions.popToTop());
    }
  return (
    <View style={styles.container}>
      <Text>Tela Contato</Text>
      <Button title='Voltar home' onPress={handleHome}/>
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
});
