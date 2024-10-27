import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import api from './src/services/api';
import Movies from './src/Movies';

export default function App() {

  const [filmes, setFilmes] = useState([]);

  //useEffect para sempre que abrir o app executar
  useEffect(() => {
    // função async para carregar os filmes
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes'); //rota para api
      setFilmes(response.data);
    }
    loadFilmes();

  }, []);

  return (
    <View style={styles.container}>

      <FlatList
      data={filmes}
      keyExtractor={ (item) => String(item.id) }
      renderItem={ ({ item }) => <Movies data={item} /> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
