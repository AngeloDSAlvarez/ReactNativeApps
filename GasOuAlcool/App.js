import { Component } from 'react';
import { StyleSheet, Text, View, Image, Modal, TextInput, TouchableOpacity } from 'react-native';
import ModalCalc from './src/ModalCalc'
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alcohol: 0,
      gas: 0,
      best: '',
      modalVisible: false,
    }
  
    this.calc = this.calc.bind(this);
    this.calcAgain = this.calcAgain.bind(this);
  }

  calc(){
    let calc = this.state.alcohol / this.state.gas;
    let op = '';
    (calc < 0.7) ? op = 'Alcohol' : op = 'Gas';
    this.setState({ 
      best: op,
      modalVisible: true,
     })
  }
  calcAgain(value) {
    this.setState({
      modalVisible: value,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/img/logo.png')}
        />
        <Text style={styles.title}>Which is the best option?</Text>

        <View style={styles.formView}>
          <Text style={styles.descInput}>Alcohol (Price/Liter)</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={ (text) => this.setState({ alcohol: text }) }
          />

          <Text style={styles.descInput}>Gas (Price/Liter)</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={ (text) => this.setState({ gas: text }) }

          />

          <TouchableOpacity
          onPress={this.calc}
          >
            <View style={styles.btnCalc}>
              <Text style={styles.txtCalc}>Calc</Text>
            </View>
          </TouchableOpacity>

          <Modal
          visible={this.state.modalVisible}
          animationType='slide'
          >
            <ModalCalc 
            data={this.state}
            close = { () => this.calcAgain(false) }
            />
          </Modal>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 15,
  },
  formView: {
    width: '100%',
    marginTop: 25,
    padding: 15,
  },
  descInput: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 15,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    fontSize: 26,
    borderRadius: 5,
    height: 50,
    marginTop: 5,
  },
  btnCalc: {
    height: 50,
    marginTop: 15,
    backgroundColor: '#F92E2E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCalc: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  }

});
