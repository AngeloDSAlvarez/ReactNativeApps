import React, {  } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
    // useNavigation -> objeto para navegar para outra tela
    const navigation = useNavigation();

    function navegaSobre() {
      // envia como parametro 
      navigation.navigate('Sobre')
    }
    

    return (
      <View style={styles.container}>
        <Text>Tela HOME</Text>
        <Button title='Ir para sobre' onPress={ navegaSobre } />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
