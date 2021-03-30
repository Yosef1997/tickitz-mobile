import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import InputEmail from '../InputEmail';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>Be the vanguard of the</Text>
          <Text style={styles.text2}>Moviegoers</Text>
        </View>
        <InputEmail />
        <TouchableOpacity style={styles.btn}>
          <View>
            <Text style={styles.btnfont}>Join now</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.text3}>
            By joining you as a Tickitz member, {'\n'}
            we will always send you the {'\n'}
            latest updates via email.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 48,
    marginHorizontal: 24,
    marginVertical: 64,
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: '#5F2EEA',
    height: 46,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  btnfont: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  text1: {
    fontSize: 14,
    color: '#4E4B66',
    textAlign: 'center',
  },
  text2: {
    fontSize: 32,
    color: '#5F2EEA',
    textAlign: 'center',
    marginBottom: 42,
  },
  text3: {
    fontSize: 12,
    color: '#6E7191',
    textAlign: 'center',
  },
});
