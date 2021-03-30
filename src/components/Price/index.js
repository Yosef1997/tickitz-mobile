import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={styles.row1}>
        <Text style={styles.text1}> Total Payment </Text>
        <Text style={styles.text2}>${this.props.price}/seat</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  text1: {
    color: '#AAAAAA',
    fontSize: 16,
  },
  text2: {
    color: '#14142B',
    fontSize: 20,
    fontWeight: '600',
  },
});
