import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.parent1}>
          <Image source={this.props.image} />
          <Text style={styles.text1}>
            {`${this.props.date} - ${this.props.time}`}
          </Text>
          <Text style={styles.text2}>{this.props.movie}</Text>
        </View>
        <View style={styles.parent2}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Ticket in active</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 32,
  },
  parent1: {
    paddingHorizontal: 26,
    paddingTop: 25,
    paddingBottom: 32,
    borderBottomWidth: 0.2,
  },
  text1: {
    color: '#AAAAAA',
    fontSize: 13,
    marginTop: 18,
    marginBottom: 4,
  },
  text2: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: '#00BA88',
    height: 40,
    marginHorizontal: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  btntext: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
});
