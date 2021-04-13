import React, {Component} from 'react';
import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import Dana from '../../assets/dana.png';
import Gopay from '../../assets/gopay.png';
import Gpay from '../../assets/gpay.png';
import Ovo from '../../assets/ovo.png';
import Paypal from '../../assets/paypal.png';
import Visa from '../../assets/visa.png';

export default class index extends Component {
  state = {
    row1: [
      {id: 1, image: Gpay},
      {id: 2, image: Visa},
      {id: 3, image: Gopay},
    ],
    row2: [
      {id: 1, image: Paypal},
      {id: 2, image: Ovo},
      {id: 3, image: Dana},
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btngroup}>
          {this.state.row1.map((item) => {
            return (
              <TouchableOpacity key={String(item.id)}>
                <View style={styles.btn}>
                  <Image source={item.image} style={styles.img} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.btngroup}>
          {this.state.row2.map((item) => {
            return (
              <TouchableOpacity key={String(item.id)}>
                <View style={styles.btn}>
                  <Image source={item.image} style={styles.img} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.orline}>
          <View style={styles.line} />
          <Text>Or</Text>
          <View style={styles.line} />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.text1}>
              Pay via cash. {''}
              <Text style={styles.text2}>See how it work</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    paddingTop: 32,
    paddingLeft: 28,
    paddingRight: 12,
    borderRadius: 4,
  },
  btngroup: {
    flexDirection: 'row',
  },
  btn: {
    width: 80,
    height: 32,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 16,
    marginBottom: 16,
  },
  line: {
    width: 100,
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  orline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 24,
  },
  text1: {
    color: '#6E7191',
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 32,
  },
  text2: {
    color: '#5F2EEA',
    fontSize: 14,
  },
});
