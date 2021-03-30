import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class index extends Component {
  state = {
    month: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  };
  render() {
    return (
      <ScrollView>
        <ScrollView horizontal>
          {this.state.month.map((month, index) => {
            return (
              <TouchableOpacity
                key={String(index)}
                onPress={this.props.onPress}>
                <View style={styles.btn}>
                  <Text style={styles.btnFont}>{month}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    height: 42,
    width: 127,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#5F2EEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  btnFont: {
    color: '#5F2EEA',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
