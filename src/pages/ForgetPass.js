import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import TickitzLogo from '../assets/TickitzLogo.png';
import InputEmail from '../components/InputEmail';

export default class SignIn extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image source={TickitzLogo} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.signup}>Forgot password</Text>
          <Text style={styles.forgetpass}>
            we'll send a link to your email shortly
          </Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formlabel}>Email</Text>
          <InputEmail />
        </View>
        <TouchableOpacity style={styles.btnsignup}>
          <View>
            <Text style={styles.btnfont}>Activate now</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 55,
    backgroundColor: 'white',
  },
  logo: {
    width: 79,
    height: 21,
    marginBottom: 47,
  },
  signup: {
    fontSize: 26,
    marginBottom: 10,
  },
  forgetpass: {
    color: '#8692A6',
    fontSize: 15,
  },
  form: {
    marginTop: 46,
  },
  formlabel: {
    fontSize: 16,
    marginVertical: 12,
  },
  btnfont: {
    fontSize: 16,
    color: 'white',
  },
  btnsignup: {
    backgroundColor: '#5F2EEA',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 40,
  },
});
