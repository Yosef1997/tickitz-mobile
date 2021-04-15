import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import Footer from '../components/Footer';
import Price from '../components/Price';
import BtnPay from '../components/BtnPay';
import InputCustom from '../components/InputCustom';
import Icon from '../assets/warning.png';
import Button from '../components/Button';
import {purchase} from '../components/Redux/Action/order';
import PushNotification from 'react-native-push-notification';
import {connect} from 'react-redux';

class Payment extends Component {
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
            <Button onPress={() => this.doPay()}>Pay your order</Button>
          </View>
        </View>
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
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});
const mapDispatchToProps = {purchase};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
