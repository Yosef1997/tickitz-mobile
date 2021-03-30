import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Footer from '../components/Footer';
import Price from '../components/Price';
import BtnPay from '../components/BtnPay';
import Formpay from '../components/FormPay';

export default class Payment extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Price price={'10.00'} />
        <View style={styles.parent}>
          <Text style={styles.text1}>Payment Method</Text>
        </View>
        <View style={styles.container2}>
          <BtnPay />
        </View>
        <View style={styles.parent}>
          <Text style={styles.text1}>Personal Info</Text>
        </View>
        <View style={styles.parent2}>
          <Formpay />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Ticket')}>
            <View>
              <Text style={styles.text2}>Pay your order</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  container2: {
    backgroundColor: '#F5F6F8',
    alignItems: 'center',
  },
  parent: {
    backgroundColor: '#F5F6F8',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 16,
  },
  parent2: {
    backgroundColor: '#F5F6F8',
    paddingHorizontal: 24,
  },
  text1: {
    color: '#14142B',
    fontSize: 18,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: '#5F2EEA',
    height: 56,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 72,
    marginTop: 56,
  },
  text2: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
