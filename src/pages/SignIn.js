import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import TickitzLogo from '../assets/TickitzLogo.png';
import InputEmail from '../components/InputEmail';
import InputPass from '../components/InputPassword';
import GoogleIcon from '../assets/googleicon.png';
import FacebookIcon from '../assets/facebookicon.png';
import Button from '../components/Button';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {signin} from '../components/Redux/Action/auth';
import {
  allDate,
  allLocation,
  allCinema,
  allTime,
} from '../components/Redux/Action/showTime';

class SignIn extends Component {
  state = {
    isLoading: false,
    isMessage: false,
  };
  loginValidation(values) {
    const errors = {};
    const {email, password} = values;
    if (!email) {
      errors.msg = 'Email Required';
    } else if (!password) {
      errors.msg = 'Password Required';
    }

    return errors;
  }

  async doLogin(values) {
    this.setState({isLoading: true});
    await this.props.signin(values.email, values.password);
    if (this.props.auth.token !== null) {
      this.props.allDate(this.props.auth.token);
      this.props.allLocation(this.props.auth.token);
      this.props.allCinema(this.props.auth.token);
      this.props.allTime(this.props.auth.token);
    }
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 2000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 5000);

    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image source={TickitzLogo} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.signup}>Sign In</Text>
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          validate={(values) => this.loginValidation(values)}
          onSubmit={(values, {resetForm}) => {
            this.setState({isLoading: true});
            this.doLogin(values);
            setTimeout(() => {
              resetForm();
            }, 500);
          }}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <>
              <View style={styles.form}>
                <Text style={styles.formlabel}>Email</Text>
                <InputEmail
                  onBlur={handleBlur('email')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
              </View>
              <View>
                <Text style={styles.formlabel}>Password</Text>
                <InputPass
                  placeholder="Write your password"
                  onBlur={handleBlur('password')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                {errors.msg ? (
                  <Text style={styles.textError}>{errors.msg}</Text>
                ) : null}
                {this.props.auth.message !== '' && this.state.isMessage ? (
                  <Text style={styles.textsuccess}>
                    {this.props.auth.message}
                  </Text>
                ) : null}
                {this.props.auth.errorMsg !== '' && this.state.isMessage ? (
                  <Text style={styles.textError}>
                    {this.props.auth.errorMsg}
                  </Text>
                ) : null}
                {this.state.isLoading === true ? (
                  <View>
                    <ActivityIndicator size="large" color="#5F2EEA" />
                  </View>
                ) : (
                  <View style={styles.formBtn}>
                    {values.email === '' || values.password === '' ? (
                      <Button disabled={true} onPress={handleSubmit}>
                        Sign in
                      </Button>
                    ) : (
                      <Button disabled={false} onPress={handleSubmit}>
                        Sign in
                      </Button>
                    )}
                  </View>
                )}
              </View>
            </>
          )}
        </Formik>
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
  textError: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  textsuccess: {
    fontSize: 14,
    color: '#00D16C',
    textAlign: 'center',
    marginVertical: 10,
  },
  formBtn: {
    paddingVertical: 25,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {signin, allDate, allLocation, allCinema, allTime};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
