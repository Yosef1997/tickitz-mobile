// import React, {Component} from 'react';
// import {
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import SeatRow from '../components/PickerSeat/Column';
// import SeatCol from '../components/PickerSeat/Row';
// import Seat from '../components/CardSeat';
// import Footer from '../components/Footer';

// export default class Order extends Component {
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <Seat />
//         <View style={styles.seats}>
//           <SeatRow />
//           <SeatCol />
//         </View>
//         <TouchableOpacity style={styles.btn1}>
//           <Text style={styles.btntext1}>Add new seat</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.btn2}
//           onPress={() => this.props.navigation.navigate('Payment')}>
//           <Text style={styles.btntext2}>Checkout now</Text>
//         </TouchableOpacity>
//         <Footer />
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F5F6F8',
//   },
//   seats: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     marginHorizontal: 12,
//     borderRadius: 12,
//     marginVertical: 8,
//     paddingVertical: 16,
//   },
//   btn1: {
//     borderWidth: 1,
//     borderColor: '#5F2EEA',
//     height: 56,
//     borderRadius: 8,
//     justifyContent: 'center',
//     marginTop: 12,
//     marginBottom: 28,
//     marginHorizontal: 12,
//   },
//   btntext1: {
//     textAlign: 'center',
//     color: '#5F2EEA',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   btn2: {
//     backgroundColor: '#5F2EEA',
//     height: 56,
//     borderRadius: 8,
//     justifyContent: 'center',
//     marginTop: 28,
//     marginBottom: 72,
//     marginHorizontal: 12,
//   },

//   btntext2: {
//     textAlign: 'center',
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '700',
//   },
// });

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

export default class Order extends Component {
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

        {/* {selectedSeat === [] ? (
          <>
            <View style={styles.seats}>
              {selectedSeat.map((seat, index) => (
                <SeatPicker
                  key={String(index)}
                  onChange={(newSeat) => this.seatPick(seat, newSeat)}
                  selected={seat}
                  allSeat={this.state.allSeat}
                />
              ))}
            </View>
          </>
        ) : (
          <>
            <View style={styles.noSeats}>
              {selectedSeat.map((seat, index) => (
                <SeatPicker
                  key={String(index)}
                  onChange={(newSeat) => this.seatPick(seat, newSeat)}
                  selected={seat}
                  allSeat={this.state.allSeat}
                />
              ))}
            </View>
          </>
        )} */}
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => this.props.navigation.navigate('Payment')}>
          <Text style={styles.btntext2}>Checkout now</Text>
        </TouchableOpacity>
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
    backgroundColor: '#5F2EEA',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
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
