import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={styles.emailInput}
          placeholder={'Write your email'}
          keyboardType="email-address"
          onChangeText={this.props.onChangeText}
        />
        <Text>{this.props.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    borderColor: '#eaeaea',
  },
  emailInput: {
    flex: 1,
  },
  passIcon: {
    justifyContent: 'center',
  },
});
