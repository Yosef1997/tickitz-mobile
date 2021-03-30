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
import InputPass from '../components/InputPassword';
import GoogleIcon from '../assets/googleicon.png';
import FacebookIcon from '../assets/facebookicon.png';
import {connect} from 'react-redux';
import {signin, detailUser} from '../components/Redux/Action/auth';
import {show} from '../components/Redux/Action/movie';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  doLogin = async () => {
    const {email, password} = this.state;
    await this.props.signin(email, password);
    // await this.props.detailUser(this.props.auth.user.id);
    // await this.props.show();
    if (this.props.auth.token !== null) {
      this.props.navigation.navigate('Home');
    }
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image source={TickitzLogo} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.signup}>Sign In</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formlabel}>Email</Text>
          <InputEmail onChangeText={(email) => this.setState({email})} />
        </View>
        <View>
          <Text style={styles.formlabel}>Password</Text>
          <InputPass
            placeholder="Write your password"
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <TouchableOpacity style={styles.btnsignup} onPress={this.doLogin}>
          <View>
            <Text style={styles.btnfont}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.tologin}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ForgetPass')}>
            <Text style={styles.asklogin}>
              Forgot your password? <Text style={styles.login}>Reset now</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orline}>
          <View style={styles.line} />
          <Text>Or</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.btngroup}>
          <TouchableOpacity style={styles.btnaccount}>
            <View>
              <Image source={GoogleIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnaccount}>
            <View>
              <Image source={FacebookIcon} />
            </View>
          </TouchableOpacity>
        </View>
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
    marginBottom: 41,
  },
  formlabel: {
    fontSize: 16,
    marginBottom: 12,
  },
  form: {
    marginBottom: 25,
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
  tologin: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  asklogin: {
    fontSize: 16,
    color: '#6E7191',
  },
  login: {
    color: '#5F2EEA',
    fontSize: 16,
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
    marginTop: 47,
    marginBottom: 20,
  },
  btngroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnaccount: {
    borderRadius: 4,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    width: 64,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {signin, show, detailUser};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
