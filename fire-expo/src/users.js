import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { db } from './firebaseConnection';
import { deleteDoc, doc } from 'firebase/firestore';

export function UsersList( {user, handleEdit} ) {

    async function handleDeleteUser(){
        const docRef = doc(db, 'users', user.id);
        
        deleteDoc(docRef);
    }

    async function handleEditUser() {
        handleEdit(user);
    }

    return(
        <View style={ styles.container }>
            <Text style={styles.item}>Nome: {user.nome}</Text>
            <Text style={styles.item}>Idade: {user.idade}</Text>
            <Text style={styles.item}>Cargo: {user.cargo}</Text>

            <TouchableOpacity style={styles.button} onPress={handleDeleteUser} >
                <Text style={styles.buttonText}>Deletar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonEdit} onPress={handleEditUser} >
                <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
    },
    item: {
        color: '#000',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#b3261e',
        alignSelf: 'flex-start',
        padding: 4,
        borderRadius: 4,
        marginTop: 16
    },
    buttonText: {
        color: '#fff',
        paddingLeft: 8,
        paddingRight: 8
    },
    buttonEdit: {
        backgroundColor: '#000',
        alignSelf: 'flex-start',
        padding: 4,
        borderRadius: 4,
        marginTop: 16
    }
})