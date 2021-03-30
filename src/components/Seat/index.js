import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <TouchableOpacity key={this.props.key} onPress={this.props.onPress}>
        <View
          style={[
            seatStyles.component,
            this.props.selected && seatStyles.selected,
          ]}
        />
      </TouchableOpacity>
    );
  }
}

const seatStyles = StyleSheet.create({
  component: {
    width: 14,
    height: 14,
    margin: 3,
    borderRadius: 2,
    backgroundColor: '#D6D8E7',
  },
  selected: {
    backgroundColor: '#5F2EEA',
  },
});
