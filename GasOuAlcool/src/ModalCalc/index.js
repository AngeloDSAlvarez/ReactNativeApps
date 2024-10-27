import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: this.props.data
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../img/gas.png')}
        />
        <Text style={styles.title}>It's worth using {this.state.data.best}</Text>

        <Text style={styles.subTitle}>With the prices:</Text>
        <Text style={styles.txtPag}>Alcohol: $ {this.state.data.alcohol}</Text>
        <Text style={styles.txtPag}>Gas: $ {this.state.data.gas}</Text>


        <TouchableOpacity
          onPress={this.props.close}
          >
            <View style={styles.btnCalc}>
              <Text style={styles.txtCalc}>Calc again</Text>
            </View>
          </TouchableOpacity>
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
    color: '#00cc00',
    fontWeight: 'bold',
    marginTop: 15,
  },
  btnCalc: {
    width: 300,
    height: 50,
    marginTop: 15,
    padding: 5,
    borderColor: '#F92E2E',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCalc: {
    fontSize: 26,
    color: '#F92E2E',
  },
  subTitle: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  txtPag: {
    fontSize: 22,
    color: '#fff'
  }
});