import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import Footer from '../components/Footer';
import Price from '../components/Price';
import BtnPay from '../components/BtnPay';
import InputCustom from '../components/InputCustom';
import Icon from '../assets/warning.png';
import Button from '../components/Button';
import {Formik} from 'formik';
import {purchase} from '../components/Redux/Action/order';
import {updateUser} from '../components/Redux/Action/auth';
import PushNotification from 'react-native-push-notification';
import {connect} from 'react-redux';

class Payment extends Component {
  state = {
    isLoading: false,
    isMessage: false,
  };
  paymentValidation(values) {
    const errors = {};
    const {fullName, phoneNumber} = values;

    if (!fullName) {
      errors.msg = 'Full name required';
    } else if (fullName.length < 3) {
      errors.msg = 'Full name have at least 3 characters';
    } else if (!phoneNumber) {
      errors.msg = 'Phone number required';
    } else if (phoneNumber.length < 11) {
      errors.msg = 'Phone number have at least 11 characters';
    }
    return errors;
  }
  doPay = async () => {
    const {token, user} = this.props.auth;
    const {order} = this.props;
    await this.props.purchase(
      token,
      order.detailMovie.name,
      order.detailDate.date,
      order.detailLocation.name,
      order.detailTime.time,
      order.detailCinema.name,
      order.seatOrder,
      user.id,
    );
    PushNotification.localNotification({
      channelId: 'Payment',
      title: 'Payment Success', // (optional)
      message: 'Thank you, Enjoy the movie', // (required)
    });
    this.props.navigation.navigate('Ticket');
  };
  async doPayCheck(values) {
    this.setState({isLoading: true});
    const {token, user} = this.props.auth;
    await this.props.updateUser(token, {
      id: user.id,
      fullName: values.fullName,
      // email: values.email,
      phoneNumber: values.phoneNumber,
      // password: values.newPassword,
    });
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 3000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 6000);
    if (this.props.auth.errorMsg === '') {
      this.doPay();
    }
  }
  render() {
    const {order} = this.props;
    const {user} = this.props.auth;
    return (
      <ScrollView style={styles.container}>
        <Price price={`${order.seatOrder.length * 10}.00`} />
        <View style={styles.parent}>
          <Text style={styles.text1}>Payment Method</Text>
        </View>
        <View style={styles.container2}>
          <BtnPay />
        </View>
        <View style={styles.parent}>
          <Text style={styles.text1}>Personal Info</Text>
        </View>
        {user.firstName !== 'null' && user.phoneNumber !== 'null' ? (
          <View style={styles.parent2}>
            <View style={styles.containerForm}>
              <Text style={styles.text}> Full Name </Text>
              <InputCustom placeholder={`${user.firstName} ${user.lastName}`} />
              <Text style={styles.text}> Email </Text>
              <InputCustom
                placeholder={user.email}
                keyboardType="email-address"
              />
              <Text style={styles.text}> Phone Number </Text>
              <InputCustom
                text="+62"
                placeholder={user.phoneNumber}
                keyboardType="numeric"
              />
              <View style={styles.group}>
                <Image source={Icon} />
                <Text style={styles.text3}>Fill your data correctly.</Text>
              </View>
            </View>
            <View style={styles.formBtn}>
              <Button onPress={this.doPay}>Pay your order</Button>
            </View>
          </View>
        ) : (
          <Formik
            initialValues={{fullName: '', phoneNumber: ''}}
            validate={(values) => this.paymentValidation(values)}
            onSubmit={(values, {resetForm}) => {
              this.setState({isLoading: true});
              this.doPayCheck(values);
              setTimeout(() => {
                resetForm();
              }, 500);
            }}>
            {({values, errors, handleChange, handleBlur, handleSubmit}) => (
              <View style={styles.parent2}>
                <View style={styles.containerForm}>
                  <Text style={styles.text}> Full Name </Text>
                  <InputCustom
                    value={values.fullName}
                    onBlur={handleBlur('fullName')}
                    onChangeText={handleChange('fullName')}
                    placeholder="Write your full name"
                  />

                  <Text style={styles.text}> Email </Text>
                  <InputCustom
                    placeholder={user.email}
                    keyboardType="email-address"
                  />
                  <Text style={styles.text}> Phone Number </Text>
                  <InputCustom
                    value={values.phoneNumber}
                    onBlur={handleBlur('phoneNumber')}
                    onChangeText={handleChange('phoneNumber')}
                    text="+62"
                    placeholder="Write your phone number"
                    keyboardType="numeric"
                  />
                  <View style={styles.group}>
                    <Image source={Icon} />
                    <Text style={styles.text3}>Fill your data correctly.</Text>
                  </View>
                </View>
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
                    {values.fullName === '' || values.phoneNumber === '' ? (
                      <Button disabled={true} onPress={handleSubmit}>
                        Pay your order
                      </Button>
                    ) : (
                      <Button disabled={false} onPress={handleSubmit}>
                        Pay your order
                      </Button>
                    )}
                  </View>
                )}
                {/* <View style={styles.formBtn}>
                  <Button onPress={handleSubmit}>Pay your order</Button>
                </View> */}
              </View>
            )}
          </Formik>
        )}
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  containerForm: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 32,
    paddingTop: 26,
  },
  container2: {
    backgroundColor: '#F5F6F8',
    alignItems: 'center',
  },
  parent: {
    backgroundColor: '#F5F6F8',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 16,
  },
  parent2: {
    backgroundColor: '#F5F6F8',
    paddingHorizontal: 24,
  },
  text1: {
    color: '#14142B',
    fontSize: 18,
    fontWeight: '600',
  },
  text2: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  text: {
    color: '#696F79',
    fontSize: 14,
    paddingBottom: 8,
    marginTop: 24,
  },
  text3: {
    color: '#4E4B66',
    fontSize: 14,
    marginLeft: 15,
  },
  group: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(244, 183, 64, 0.3)',
    marginTop: 33,
    marginBottom: 25,
  },
  formBtn: {
    marginBottom: 72,
    marginTop: 56,
  },
  textError: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  textsuccess: {
    fontSize: 14,
    color: '#00D16C',
    textAlign: 'center',
    marginTop: 10,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});
const mapDispatchToProps = {purchase, updateUser};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
