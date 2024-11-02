import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

export default function Sobre() {
  // useRoute para pegar as informações que vieram por parametro
  const route = useRoute();
  // useNavigation para ter acesso as opções do layout da página
  const navigation = useNavigation();
  // useLayoutEffect para executar antes de carregar o restante
  useLayoutEffect( () => {
    // alterando as opções do layout
    navigation.setOptions({
      title: (route.params?.nome) === '' ? 'Página Sobre': route.params?.nome
    })
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <Text>Tela Sobre</Text>
      {/* ? serve para verificar se ele enviou o parametro */}
      <Text>{ route.params?.email }</Text>
      <Text>{ route.params?.nome }</Text>

      <Button
      title='Tela Contatos'
      onPress={ () => navigation.navigate('Contato')}
      />

      <Button
      title='Voltar tela' onPress={ () => navigation.goBack()}
      />
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
