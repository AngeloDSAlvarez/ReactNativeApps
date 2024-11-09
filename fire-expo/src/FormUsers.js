import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';

import { db } from './firebaseConnection';
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc, getDocs, updateDoc } from 'firebase/firestore';

import { UsersList } from './users';

export function FormUsers() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cargo, setCargo] = useState("");

  const [users, setUsers] = useState([]);

  const [showForm, setShowForm] = useState(true);
  const [isEditing, setIsEditing] = useState('');

  useEffect(() => {
    async function getDados() {

      const usersRef = collection(db, 'users');

      onSnapshot(usersRef, (snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            idade: doc.data().idade,
            cargo: doc.data().cargo
          })
        })
        setUsers(lista);
      })

      // getDoc não atualiza em tempo real
      /*const docref = doc(db, 'users', '2') // pegar referencia do que quer buscar 

      getDoc(docref) // getDoc enviando a ref
      .then((snapshot) => { // .then para pegar o resultado
        setNome(snapshot.data()?.nome)
      })
      .catch((err) => { // tratamento de erro
        console.log('Error: ')
        console.log(err)
      })

      onSnapshot(doc(db, 'users', '1'), (doc) => {
        setNome(doc.data()?.nome);
      }) */

      /* busca apenas quando abre o app
      getDocs(usersRef)
      .then( (snapshot) => {
        let lista = [];

        snapshot.forEach( (doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            idade: doc.data().idade,
            cargo: doc.data().cargo
          })
        })
        setUsers(lista);
      })
      .catch( (err) => {
        console.log(err);
        
      })*/

    }

    getDados();
  }, [])

  async function handleRegister() {
    // setDoc utilizado para definir nome do documento na mão
    /* await setDoc(doc(db, 'users', '3'), {
      nome: 'Jose',
      idade: '30',
      cargo: 'BackEnd'
    })
    .then( () => {
      console.log("Cadastrado com sucesso");
    })
    .catch( (err) => {
      console.log(err);
    }) */
    // gera o id aleatório
    await addDoc(collection(db, 'users'), {
      nome: nome,
      idade: idade,
      cargo: cargo
    })
      .then(() => {
        alert("Cadastrado com sucesso");
        limparForm();
      })
      .catch((err) => {
        console.log(err);
      })
  }
  function handleToggle() {
    setShowForm(!showForm);
  }

  function editUser(user) {
    setNome(user.nome);
    setIdade(user.idade);
    setCargo(user.cargo);
    setIsEditing(user.id);
  }

  async function handleEditUser() {
    const docRef = doc(db, 'users', isEditing);

    await updateDoc(docRef, {
      nome: nome,
      idade: idade,
      cargo: cargo
    })
    limparForm();
    setIsEditing('');
  }

  return (
    <View style={styles.container}>
      {showForm && (
        <View>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu nome...'
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua idade...'
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />

          <Text style={styles.label}>Cargo:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu cargo...'
            value={cargo}
            onChangeText={(text) => setCargo(text)}
          />

          {isEditing !== '' ? (
            <TouchableOpacity style={styles.button} onPress={handleEditUser}>
              <Text style={styles.buttonTxt}>Editar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonTxt}>Adicionar</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <TouchableOpacity onPress={handleToggle} style={{ marginTop: 8 }}>
        <Text style={{ textAlign: 'center', color: '#000' }}>
          {(showForm) ? 'Esconder formulário' : 'Abrir formulário'}
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 14, marginLeft: 8, fontSize: 20, color: '#000' }}>Usuários:</Text>

      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <UsersList user={item} handleEdit={(item) => editUser(item)} />}
      />

    </View>
  );

  function limparForm() {
    setNome('');
    setIdade('');
    setCargo('');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#000',
    marginLeft: 8,
    marginRight: 8
  },
  buttonTxt: {
    padding: 8,
    color: '#fff',
    textAlign: 'center'
  },
  label: {
    color: '#000',
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8
  }
});
