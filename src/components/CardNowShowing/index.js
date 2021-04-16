import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.card}>
          <Image source={this.props.source} style={styles.poster} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  poster: {
    width: 122,
    height: 185,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  card: {
    marginTop: 32,
    marginRight: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 6,
    width: 154,
  },
});
