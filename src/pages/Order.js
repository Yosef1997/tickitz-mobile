import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SeatRow from '../components/PickerSeat/Column';
import SeatCol from '../components/PickerSeat/Row';
import Seat from '../components/CardSeat';
import Footer from '../components/Footer';

export default class Order extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Seat />
        <View style={styles.seats}>
          <SeatRow />
          <SeatCol />
        </View>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btntext1}>Add new seat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => this.props.navigation.navigate('Payment')}>
          <Text style={styles.btntext2}>Checkout now</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6F8',
  },
  seats: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 12,
    marginVertical: 8,
    paddingVertical: 16,
  },
  btn1: {
    borderWidth: 1,
    borderColor: '#5F2EEA',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 28,
    marginHorizontal: 12,
  },
  btntext1: {
    textAlign: 'center',
    color: '#5F2EEA',
    fontSize: 16,
    fontWeight: '700',
  },
  btn2: {
    backgroundColor: '#5F2EEA',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 28,
    marginBottom: 72,
    marginHorizontal: 12,
  },

  btntext2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
