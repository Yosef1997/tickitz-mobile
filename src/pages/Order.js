import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Footer from '../components/Footer';
import SeatSelector from '../components/SeatSelector';
import SeatPicker from '../components/SeatPicker';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {seatOrder} from '../components/Redux/Action/showTime';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeat: [],
      soldSeat: [],
      availableSeat: [],
      allSeat: [],
    };
    this.selectSeat = this.selectSeat.bind(this);
    this.checkAvailableSeat = this.checkAvailableSeat.bind(this);
    this.seatPick = this.seatPick.bind(this);
  }
  selectSeat(seatNum) {
    const {selectedSeat} = this.state;
    this.setState(
      {
        selectedSeat: selectedSeat.includes(seatNum)
          ? selectedSeat.filter((seat) => seat !== seatNum)
          : [...selectedSeat, seatNum],
      },
      () => {
        this.setState({availableSeat: this.checkAvailableSeat()});
      },
    );
    console.log(selectedSeat);
  }
  checkAvailableSeat() {
    const {selectedSeat, allSeat} = this.state;
    return allSeat.filter((current) => !selectedSeat.includes(current));
  }
  seatPick(oldSeat, newSeat) {
    const {selectedSeat, soldSeat} = this.state;
    if (!soldSeat.includes(newSeat)) {
      if (selectedSeat.indexOf(newSeat) === -1) {
        const indexSeat = selectedSeat.indexOf(oldSeat);
        selectedSeat[indexSeat] = newSeat;
        this.setState({selectedSeat});
      } else {
        Alert.alert(
          'Seat has been selected before, please select another seat!',
        );
      }
    } else {
      Alert.alert('Your seat has been reserved!');
    }
  }
  async doCheckOut() {
    await this.props.seatOrder(this.state.selectedSeat);
    this.props.navigation.navigate('Payment');
  }
  render() {
    const {selectedSeat, soldSeat} = this.state;
    return (
      <ScrollView style={styles.container}>
        <SeatSelector
          onPress={this.selectSeat}
          selectedSeat={selectedSeat}
          soldSeat={soldSeat}
          allSeat={(allSeat) => this.setState({allSeat})}
        />
        <View style={styles.choosedWrapper}>
          <Text>Choosed</Text>
          <View style={styles.choosedSeat}>
            <Text>{selectedSeat.join(', ')}</Text>
          </View>
        </View>
        <View style={[styles.seats, selectedSeat === [] && styles.noSeats]}>
          {selectedSeat.map((seat, index) => (
            <SeatPicker
              key={String(index)}
              onChange={(newSeat) => this.seatPick(seat, newSeat)}
              selected={seat}
              allSeat={this.state.allSeat}
            />
          ))}
        </View>
        <View style={styles.btn2} onPress={() => this.doCheckOut()}>
          <Button>Checkout now</Button>
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6F8',
  },
  choosedWrapper: {
    backgroundColor: 'white',
    elevation: 3,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  choosedSeat: {
    marginLeft: 30,
    flex: 1,
    alignItems: 'flex-end',
  },
  btn2: {
    marginTop: 28,
    marginBottom: 72,
    marginHorizontal: 12,
  },
  btntext2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  seats: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 12,
    marginVertical: 8,
    paddingVertical: 16,
  },
  noSeats: {
    backgroundColor: '#F5F6F8',
  },
});
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {seatOrder};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
