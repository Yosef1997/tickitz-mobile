import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import DownArrow from '../../assets/DownArrow.png';
import RightArrow from '../../assets/RightArrow.png';

const SEAT_FIRST_INDEX = 'A';
const SEAT_LAST_INDEX = 'G';
const SEAT_COUNT_PER_ROW = 7;
const SEAT_MARGIN = 3;
const SEAT_SIZE = 16;

export default class SeatSelector extends Component {
  constructor(props) {
    super(props);
    this.seatGenerator = this.seatGenerator.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.allSeat = this.allSeat.bind(this);
  }
  seatGenerator(first = 'A', last = 'G', count = 7, nextCount = false) {
    const firstChar = first.charCodeAt(0);
    const lastChar = last.charCodeAt(0);
    const seat = [];
    for (let i = firstChar; i <= lastChar; i++) {
      for (let j = 1; j <= count; j++) {
        seat.push(`${String.fromCharCode(i)}${nextCount ? count + j : j}`);
      }
    }
    return seat;
  }

  allSeat() {
    const seat = [];
    for (
      let i = SEAT_FIRST_INDEX.charCodeAt(0);
      i <= SEAT_LAST_INDEX.charCodeAt(0);
      i++
    ) {
      for (let j = 1; j <= SEAT_COUNT_PER_ROW * 2; j++) {
        seat.push(`${String.fromCharCode(i)}${j}`);
      }
    }
    return seat;
  }

  onSelect(seat) {
    this.props.onPress(seat);
  }
  componentDidMount() {
    this.props.allSeat(this.allSeat());
  }

  render() {
    const seat = (next = false) =>
      this.seatGenerator(
        SEAT_FIRST_INDEX,
        SEAT_LAST_INDEX,
        SEAT_COUNT_PER_ROW,
        next,
      );
    const {selectedSeat, soldSeat} = this.props;
    return (
      <View>
        <Text style={seatSelectorStyles.header}>Choose Your Seat</Text>
        <View style={seatSelectorStyles.container}>
          <View style={seatSelectorStyles.screen} />
          <View style={seatSelectorStyles.rowSquence} />
          <View style={seatSelectorStyles.root}>
            <View style={seatSelectorStyles.parent}>
              {seat().map((i, index) => (
                <TouchableOpacity
                  key={String(index)}
                  onPress={() => this.onSelect(i)}
                  disabled={soldSeat.includes(i)}>
                  <View
                    style={[
                      seatSelectorStyles.seat,
                      selectedSeat.includes(i) &&
                        seatSelectorStyles.selectedSeat,
                      soldSeat.includes(i) && seatSelectorStyles.soldSeat,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <View style={seatSelectorStyles.parent}>
              {seat(true).map((i, index) => (
                <TouchableOpacity
                  key={String(index)}
                  onPress={() => this.onSelect(i)}
                  disabled={soldSeat.includes(i)}>
                  <View
                    style={[
                      seatSelectorStyles.seat,
                      selectedSeat.includes(i) &&
                        seatSelectorStyles.selectedSeat,
                      soldSeat.includes(i) && seatSelectorStyles.soldSeat,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={seatSelectorStyles.colSquence} />
          <View style={seatSelectorStyles.colSquence2} />
          <Text style={seatSelectorStyles.text1}>Seating key</Text>
          <View style={seatSelectorStyles.row2}>
            <View>
              <View style={seatSelectorStyles.rownote}>
                <Image source={DownArrow} />
                <Text style={seatSelectorStyles.text2}>A - G</Text>
              </View>
              <View style={seatSelectorStyles.rownote}>
                <View style={seatSelectorStyles.available} />
                <Text style={seatSelectorStyles.text2}>Available</Text>
              </View>
              <View style={seatSelectorStyles.rownote}>
                <View style={seatSelectorStyles.nest} />
                <Text style={seatSelectorStyles.text2}>Love nest</Text>
              </View>
            </View>
            <View>
              <View style={seatSelectorStyles.rownote}>
                <Image source={RightArrow} />
                <Text style={seatSelectorStyles.text2}>1 - 14</Text>
              </View>
              <View style={seatSelectorStyles.rownote}>
                <View style={seatSelectorStyles.selected} />
                <Text style={seatSelectorStyles.text2}>Selected</Text>
              </View>
              <View style={seatSelectorStyles.rownote}>
                <View style={seatSelectorStyles.sold} />
                <Text style={seatSelectorStyles.text2}>Sold</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const seatSelectorStyles = StyleSheet.create({
  header: {
    color: '#14142B',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    marginHorizontal: 12,
    paddingTop: 41,
    borderRadius: 16,
  },
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  screen: {
    height: 6,
    backgroundColor: '#5F2EEA',
    borderRadius: 3,
    borderWidth: 0.2,
    marginBottom: 16,
  },
  rowSquence: {
    position: 'relative',
    borderWidth: 1,
    width: 148,
    transform: [{rotate: '90deg'}],
    left: -77,
    top: 78,
    borderColor: 'green',
  },
  colSquence: {
    position: 'relative',
    borderWidth: 1,
    width: 148,
    borderColor: 'red',
    left: 3,
    top: 4,
    marginBottom: 24,
  },
  colSquence2: {
    position: 'relative',
    borderWidth: 1,
    width: 148,
    borderColor: 'red',
    left: 185,
    top: -22,
    marginBottom: 12,
  },
  row2: {
    flexDirection: 'row',
  },
  rownote: {
    flexDirection: 'row',
    width: 150,
  },
  available: {
    backgroundColor: '#D6D8E7',
    borderRadius: 4,
    width: 20,
    height: 20,
  },
  nest: {
    backgroundColor: '#F589D7',
    borderRadius: 4,
    width: 20,
    height: 20,
  },
  selected: {
    backgroundColor: '#5F2EEA',
    borderRadius: 4,
    width: 20,
    height: 20,
  },
  sold: {
    backgroundColor: '#6E7191',
    borderRadius: 4,
    width: 20,
    height: 20,
  },
  text1: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 18,
  },

  text2: {
    color: '#4E4B66',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 10,
    marginBottom: 16,
  },

  parent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SEAT_COUNT_PER_ROW * (SEAT_SIZE + SEAT_MARGIN * 2),
  },
  seat: {
    margin: SEAT_MARGIN,
    width: SEAT_SIZE,
    height: SEAT_SIZE,
    backgroundColor: '#D6D8E7',
    borderRadius: 2,
  },
  selectedSeat: {
    backgroundColor: '#5F2EEA',
  },
  soldSeat: {
    backgroundColor: '#6E7191',
  },
});
