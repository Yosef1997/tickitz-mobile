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
import Button from '../components/Button';
import GoogleIcon from '../assets/googleicon.png';
import FacebookIcon from '../assets/facebookicon.png';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {signup} from '../components/Redux/Action/auth';

class SignUp extends Component {
  state = {
    isLoading: false,
    isMessage: false,
  };
  registerValidation(values) {
    const errors = {};
    const {email, password} = values;

    if (!email) {
      errors.msg = 'Email Required';
    } else if (!password) {
      errors.msg = 'Password Required';
    } else if (password.length < 8) {
      errors.msg = 'Password have at least 8 characters';
    }
    return errors;
  }

  async doSignUp(values) {
    this.setState({isLoading: true});
    await this.props.signup(values.email, values.password);
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 3000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 6000);
    if (this.props.auth.errorMsg === '') {
      this.props.navigation.navigate('SignIn');
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image source={TickitzLogo} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.signup}>Sign Up</Text>
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          validate={(values) => this.registerValidation(values)}
          onSubmit={(values, {resetForm}) => {
            this.setState({isLoading: true});
            this.doSignUp(values);
            setTimeout(() => {
              resetForm();
            }, 500);
          }}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <>
              <View style={styles.form}>
                <Text style={styles.formlabel}>Email</Text>
                <InputEmail
                  value={values.email}
                  onBlur={handleBlur('email')}
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
                        Join for free
                      </Button>
                    ) : (
                      <Button disabled={false} onPress={handleSubmit}>
                        Join for free
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
            onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text style={styles.asklogin}>
              Do you already have an account?{' '}
              <Text style={styles.login}>Log in</Text>
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
              <Image source={GoogleIcon} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnaccount}>
            <Image source={FacebookIcon} style={styles.icon} />
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
    justifyContent: 'center',
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
  icon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
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

const mapDispatchToProps = {signup};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
