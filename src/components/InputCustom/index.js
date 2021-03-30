import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
        <Icon
          name={this.props.Icon}
          size={this.props.size}
          style={styles.icon}
        />
        <TextInput
          {...this.props}
          style={styles.emailInput}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          keyboardType={this.props.keyboardType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    borderColor: '#eaeaea',
    alignItems: 'center',
  },
  emailInput: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
});
