import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import InputCustom from '../InputCustom';
import {Formik} from 'formik';
import InputPass from '../InputPassword';
import Button from '../Button';
import {connect} from 'react-redux';
import {updateUser} from '../Redux/Action/auth';

class index extends Component {
  state = {
    isLoading: false,
    isMessage: false,
  };
  passwordValidation(values) {
    const errors = {};
    const {fullName, newPassword, repeatPassword} = values;

    if (!fullName.length < 3) {
      errors.msg = 'New Password Required';
      return errors;
    } else if (!newPassword) {
      errors.msg = 'New Password Required';
      return errors;
    } else if (!repeatPassword) {
      errors.msg = 'Repeat your new password';
      return errors;
    } else if (newPassword.length < 8 || repeatPassword.length < 8) {
      errors.msg = 'Password have at least 8 characters';
      return errors;
    } else if (newPassword !== repeatPassword) {
      errors.msg = 'New password & repeat password not same';
      return errors;
    }
  }

  async doUpdate(values) {
    const {token} = this.props.auth;
    const {user} = this.props.auth;
    this.props.updateUser(token, {
      id: user.id,
      fullName: values.fullName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.newPassword,
    });
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 1000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 5000);
  }
  render() {
    const {user} = this.props.auth;
    return (
      <ScrollView>
        <View>
          <View>
            <Text style={styles.text1}>Account Settings</Text>
          </View>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              newPassword: '',
              repeatPassword: '',
            }}
            // validate={(values) => this.passwordValidation(values)}
            onSubmit={(values, {resetForm}) => {
              this.setState({isLoading: true});
              this.doUpdate(values);
              setTimeout(() => {
                resetForm();
              }, 500);
            }}>
            {({values, errors, handleChange, handleSubmit}) => (
              <>
                <View style={styles.container}>
                  <Text style={styles.text2}>Details Information</Text>
                  <Text style={styles.text3}>Full Name</Text>
                  {user.firstName !== 'null' ? (
                    <InputCustom
                      placeholder={`${user.firstName} ${user.lastName}`}
                      value={values.fullName}
                      onChangeText={handleChange('fullName')}
                    />
                  ) : (
                    <InputCustom
                      placeholder="Write your full name"
                      value={values.fullName}
                      onChangeText={handleChange('fullName')}
                    />
                  )}
                  <Text style={styles.text4}>E-mail</Text>
                  <InputCustom
                    placeholder={user.email}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    keyboardType="email-address"
                  />
                  <Text style={styles.text4}>Phone Number</Text>
                  {user.phoneNumber !== 'null' ? (
                    <InputCustom
                      text="+62"
                      placeholder={user.phoneNumber}
                      value={values.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                    />
                  ) : (
                    <InputCustom
                      text="+62"
                      placeholder="Write your phone number"
                      value={values.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                    />
                  )}
                </View>
                <View style={styles.container}>
                  <Text style={styles.text2}>Account and Privacy</Text>
                  <Text style={styles.text3}>New Password</Text>
                  <InputPass
                    placeholder=".........."
                    value={values.newPassword}
                    onChangeText={handleChange('newPassword')}
                  />
                  <Text style={styles.text4}>Confirm</Text>
                  <InputPass
                    placeholder=".........."
                    value={values.repeatPassword}
                    onChangeText={handleChange('repeatPassword')}
                  />
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
                  {this.state.isLoading ? (
                    <View>
                      <ActivityIndicator size="large" />
                    </View>
                  ) : null}
                </View>
                <View style={styles.formBtn}>
                  <Button onPress={handleSubmit}>Update change</Button>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 24,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 64,
    marginBottom: 24,
  },
  text1: {
    color: '#14142B',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 24,
    marginBottom: 39,
  },
  text2: {
    color: '#14142B',
    fontSize: 16,
    paddingBottom: 8,
    borderBottomWidth: 0.2,
  },
  text3: {
    color: '#4E4B66',
    fontSize: 16,
    marginTop: 41,
    marginBottom: 12,
  },
  text4: {
    color: '#4E4B66',
    fontSize: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#5F2EEA',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 36,
    marginBottom: 72,
  },
  btntext: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
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
    paddingHorizontal: 24,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {updateUser};

export default connect(mapStateToProps, mapDispatchToProps)(index);
