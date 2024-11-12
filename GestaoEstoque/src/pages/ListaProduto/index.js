import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { db } from '../../services/db/firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';

export function ListaProduto( {produto, handleEdit} ) {

    async function handleDeleteProduto(){
        const docRef = doc(db, 'produtos', produto.id);
        
        deleteDoc(docRef);
    }

    async function handleEditProduto() {
        handleEdit(produto);
    }

    return(
        <View style={ styles.container }>
            <Text style={styles.item}>Descrição: {produto.descricao}</Text>
            <Text style={styles.item}>Tamanho: {produto.tamanho}</Text>
            <Text style={styles.item}>Código de Barras: {produto.codBarras}</Text>
            <Text style={styles.item}>Valor: {produto.valor}</Text>

            <TouchableOpacity style={styles.button} onPress={handleDeleteProduto} >
                <Text style={styles.buttonText}>Deletar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonEdit} onPress={handleEditProduto} >
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