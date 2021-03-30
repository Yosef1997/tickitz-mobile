import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Seat from '../Seat';
import DownArrow from '../../assets/DownArrow.png';
import RightArrow from '../../assets/RightArrow.png';

export default class index extends Component {
  state = {
    rowSeat: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    colSeat1: [1, 2, 3, 4, 5, 6, 7],
    colSeat2: [8, 9, 10, 11, 12, 13, 14],
    selectedSeat: [],
    chooseSeat: false,
  };
  selectSeat = (id) => {
    const {selectedSeat} = this.state;
    this.setState({selectedSeat: [...selectedSeat, ...[id]]}, () => {
      const {selectedSeat} = this.state;
      console.log(selectedSeat);
    });
  };
  render() {
    return (
      <View>
        <Text style={styles.header}>Choose Your Seat</Text>
        <View style={styles.container}>
          <View style={styles.screen} />
          <View style={styles.rowSquence} />
          <View style={styles.seatorder}>
            <View>
              {this.state.rowSeat.map((row, i) => (
                <View style={styles.row}>
                  {this.state.colSeat1.map((col, id) => (
                    <Seat
                      selected={this.state.selectedSeat.includes(
                        `${row}${col}`,
                      )}
                      onPress={() => this.selectSeat(`${row}${col}`)}
                    />
                  ))}
                </View>
              ))}
            </View>
            <View>
              {this.state.rowSeat.map((row, i) => (
                <View style={styles.row}>
                  {this.state.colSeat2.map((col, id) => (
                    <Seat
                      selected={this.state.selectedSeat.includes(
                        `${row}${col}`,
                      )}
                      onPress={() => this.selectSeat(`${row}${col}`)}
                    />
                  ))}
                </View>
              ))}
            </View>
          </View>
          <View style={styles.colSquence} />
          <View style={styles.colSquence2} />
          <Text style={styles.text1}>Seating key</Text>
          <View style={styles.row2}>
            <View>
              <View style={styles.rownote}>
                <Image source={DownArrow} />
                <Text style={styles.text2}>A - G</Text>
              </View>
              <View style={styles.rownote}>
                <View style={styles.available} />
                <Text style={styles.text2}>Available</Text>
              </View>
              <View style={styles.rownote}>
                <View style={styles.nest} />
                <Text style={styles.text2}>Love nest</Text>
              </View>
            </View>
            <View>
              <View style={styles.rownote}>
                <Image source={RightArrow} />
                <Text style={styles.text2}>1 - 14</Text>
              </View>
              <View style={styles.rownote}>
                <View style={styles.selected} />
                <Text style={styles.text2}>Selected</Text>
              </View>
              <View style={styles.rownote}>
                <View style={styles.sold} />
                <Text style={styles.text2}>Sold</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.selectSeat}>
          <Text style={styles.text3}>Choosed</Text>
          <Text style={styles.text4}>{`${this.state.selectedSeat},`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  screen: {
    height: 6,
    backgroundColor: '#5F2EEA',
    borderRadius: 3,
    borderWidth: 0.2,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
  },
  seatorder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowSquence: {
    position: 'relative',
    borderWidth: 1,
    width: 134,
    transform: [{rotate: '90deg'}],
    left: -65,
    top: 71,
    borderColor: 'green',
  },
  colSquence: {
    position: 'relative',
    borderWidth: 1,
    width: 134,
    borderColor: 'red',
    left: 9,
    top: 4,
    marginBottom: 24,
  },
  colSquence2: {
    position: 'relative',
    borderWidth: 1,
    width: 134,
    borderColor: 'red',
    left: 162,
    top: -22,
    marginBottom: 12,
  },
  text1: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 18,
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
  text2: {
    color: '#4E4B66',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 10,
    marginBottom: 16,
  },
  selectSeat: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 12,
    marginTop: 32,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  text3: {
    color: '#4E4B66',
    fontSize: 16,
    fontWeight: '600',
  },
  text4: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});
