// import React, {Component} from 'react';
// import {Text, View, Image, StyleSheet} from 'react-native';
// import InputCustom from '../InputCustom';
// import Icon from '../../assets/warning.png';
// import Button from '../Button';
// import {connect} from 'react-redux';
// import {purchase} from '../Redux/Action/order';
// import PushNotification from 'react-native-push-notification';

// class index extends Component {
//   doPay = async () => {
//     const {token, user} = this.props.auth;
//     const {order} = this.props;
//     await this.props.purchase(
//       token,
//       order.detailMovie.name,
//       order.detailDate.date,
//       order.detailLocation.name,
//       order.detailTime.time,
//       order.detailCinema.name,
//       order.seatOrder,
//       user.id,
//     );
//     PushNotification.localNotification({
//       channelId: 'Payment',
//       title: 'Payment Success', // (optional)
//       message: 'Thank you, Enjoy the movie', // (required)
//     });
//     this.props.navigation.navigate('Ticket');
//   };
//   render() {
//     const {user} = this.props.auth;
//     return (
//       <>
//         <View style={styles.containerForm}>
//           <Text style={styles.text}> Full Name </Text>
//           <InputCustom placeholder={`${user.firstName} ${user.lastName}`} />
//           <Text style={styles.text}> Email </Text>
//           <InputCustom placeholder={user.email} keyboardType="email-address" />
//           <Text style={styles.text}> Phone Number </Text>
//           <InputCustom
//             text="+62"
//             placeholder={user.phoneNumber}
//             keyboardType="numeric"
//           />
//           <View style={styles.group}>
//             <Image source={Icon} />
//             <Text style={styles.text3}>Fill your data correctly.</Text>
//           </View>
//         </View>
//         <View style={styles.formBtn}>
//           <Button onPress={() => this.doPay()}>Pay your order</Button>
//         </View>
//       </>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   containerForm: {
//     backgroundColor: 'white',
//     borderRadius: 4,
//     paddingHorizontal: 32,
//     paddingTop: 26,
//   },
//   text: {
//     color: '#696F79',
//     fontSize: 14,
//     paddingBottom: 8,
//     marginTop: 24,
//   },
//   text3: {
//     color: '#4E4B66',
//     fontSize: 14,
//     marginLeft: 15,
//   },
//   group: {
//     flexDirection: 'row',
//     height: 48,
//     alignItems: 'center',
//     paddingHorizontal: 24,
//     backgroundColor: 'rgba(244, 183, 64, 0.3)',
//     marginTop: 33,
//     marginBottom: 25,
//   },
//   formBtn: {
//     marginBottom: 72,
//     marginTop: 56,
//   },
// });

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   order: state.order,
// });
// const mapDispatchToProps = {purchase};
// export default connect(mapStateToProps, mapDispatchToProps)(index);
