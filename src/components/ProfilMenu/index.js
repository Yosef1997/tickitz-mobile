import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={sytles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Profile')}>
          <View style={sytles.btn}>
            <Text style={sytles.btntext}>Details Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onPress}>
          <View>
            <Text style={sytles.btntext}>Order History</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const sytles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    alignItems: 'center',
    height: 54,
  },
  btntext: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  selected: {
    color: '#14142B',
    fontSize: 14,
  },
});
