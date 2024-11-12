import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';

import { doc, addDoc, collection, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../services/db/firebaseConfig';

import { ListaProduto } from '../ListaProduto';

export function Inicio() {
    const [usingModal, setUsingModal] = useState(false);
    
    const [descricao, setDescricao] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [codBarras, setCodBarras] = useState('');
    const [valor, setValor] = useState(0);

    const [produtos, setProdutos] = useState([]);
    const [isEditing, setIsEditing] = useState('');

    useEffect( () => {
        async function getData() {
            const prodRef = collection(db, 'produtos');

            onSnapshot(prodRef, (snapshot) => {
                let list = [];

                snapshot.forEach( (doc) => {
                    list.push({
                        id: doc.id,
                        descricao: doc.data()?.descricao,
                        tamanho: doc.data()?.tamanho,
                        codBarras: doc.data()?.codBarras,
                        valor: doc.data()?.valor,
                    })
                })
                setProdutos(list);
            })
        }
        getData();
        
    }, []) 

    function handleModal() {
        setUsingModal(!usingModal);
    }


    async function handleAdicionarProduto() {
        await addDoc(collection(db, 'produtos'), {
            descricao: descricao,
            tamanho: tamanho,
            codBarras: codBarras,
            valor: valor
        })
            .then(() => {
                alert('Produto inserido');
                limparForm();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function editProduto(produto) {
        handleModal();

        setDescricao(produto.descricao);
        setTamanho(produto.tamanho);
        setCodBarras(produto.codBarras);
        setValor(produto.valor);
        setIsEditing(produto.id);
    }

    async function handleEditProduto() {
        const docRef = doc(db, 'produtos', isEditing);

        await updateDoc(docRef, {
            descricao: descricao,
            tamanho: tamanho,
            codBarras: codBarras,
            valor: valor
        })
        setIsEditing('');
        handleModal();
        limparForm();
    }

    function limparForm() {
        setDescricao('');
        setTamanho('');
        setCodBarras('');
        setValor('');
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Produtos</Text>
            <TouchableOpacity style={styles.btn} onPress={handleModal} >
                <Text style={styles.btnTxt}>Adicionar produto</Text>
            </TouchableOpacity>

            <Modal
                animationType='fade'
                visible={usingModal}

            >
                <Text style={styles.label}>Descrição:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite a descrição'
                    value={descricao}
                    onChangeText={(text) => setDescricao(text)}
                />

                <Text style={styles.label}>tamanho:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o tamanho'
                    value={tamanho}
                    onChangeText={(text) => setTamanho(text)}
                />

                <Text style={styles.label}>Código de Barras:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o código de barras'
                    value={codBarras}
                    onChangeText={(text) => setCodBarras(text)}
                />

                <Text style={styles.label}>Preço:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o preço'
                    value={valor}
                    onChangeText={(text) => setValor(text)}
                />

                { isEditing !== '' ? 
                    <TouchableOpacity style={styles.btnAddProd} onPress={handleEditProduto} >
                        <Text style={styles.btnTxt}>Salvar alterações</Text>
                    </TouchableOpacity> 
                    :
                    <TouchableOpacity style={styles.btnAddProd} onPress={handleAdicionarProduto} >
                        <Text style={styles.btnTxt}>Adicionar Produto</Text>
                    </TouchableOpacity>
                }


                <TouchableOpacity style={styles.btn} onPress={handleModal} >
                    <Text style={styles.btnTxt}>Fechar Modal</Text>
                </TouchableOpacity>
            </Modal>

            <FlatList 
                style={styles.list}
                data={produtos}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({ item }) => <ListaProduto produto={item} handleEdit={ (item) => editProduto(item) } />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30
    },
    btn: {
        backgroundColor: '#000',
        marginLeft: 8,
        marginRight: 8
    },
    btnTxt: {
        padding: 8,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
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
        paddingLeft: 4,
        paddingRight: 4
    },
    btnAddProd: {
        backgroundColor: '#02b01c',
        marginLeft: 8,
        marginRight: 8
    },
    list: {
      marginTop: 8,
      marginLeft: 8,
      marginRight: 8
    }
});
