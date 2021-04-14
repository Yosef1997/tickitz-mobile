import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Barcode from '../../assets/QRCode.png';
import {connect} from 'react-redux';
import moment from 'moment';

class index extends Component {
  render() {
    const {order} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.rowQR}>
          <Image source={Barcode} />
          <View style={styles.circle1} />
          <View style={styles.circle2} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>Movie</Text>
          <Text style={styles.text1}>Category</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text2}>{order.detailMovie.name}</Text>
          <Text style={styles.text2}>PG-13</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>Date</Text>
          <Text style={styles.text1}>Time</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text2}>
            {moment(order.detailDate.date).format('D MMMM')}
          </Text>
          <Text style={styles.text2}>{order.detailTime.time}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>Count</Text>
          <Text style={styles.text1}>Seats</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text2}>{order.seatOrder.length}</Text>
          <Text style={styles.text2}>{order.seatOrder}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.text3}>Total</Text>
          <Text style={styles.text4}>{`$${
            order.seatOrder.length * 10
          }.00`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 32,
    marginHorizontal: 24,
    marginTop: 48,
    marginBottom: 72,
  },
  rowQR: {
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderStyle: 'dashed',
    borderColor: '#dedede',
    marginBottom: 41,
    paddingTop: 16,
    paddingHorizontal: 55,
  },
  row: {
    flexDirection: 'row',
  },
  text1: {
    color: '#AAAAAA',
    fontSize: 12,
    fontWeight: '600',
    width: '65%',
    marginTop: 24,
  },
  text2: {
    color: '#14142B',
    fontSize: 14,
    fontWeight: '600',
    width: '65%',
  },
  group: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#DEDEDE',
    marginTop: 40,
    marginBottom: 32,
    paddingHorizontal: 24,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  text3: {
    color: '#000000',
    fontSize: 16,
  },
  text4: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  circle1: {
    position: 'relative',
    height: 35,
    width: 35,
    borderRadius: 32,
    backgroundColor: '#F5F6F8',
    top: 53,
    left: -165,
  },
  circle2: {
    position: 'relative',
    height: 35,
    width: 35,
    borderRadius: 32,
    backgroundColor: '#F5F6F8',
    top: 18,
    left: 165,
  },
});

const mapStateToProps = (state) => ({
  order: state.order,
});
export default connect(mapStateToProps)(index);
