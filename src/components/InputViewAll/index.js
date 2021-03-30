import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Sort from 'react-native-vector-icons/FontAwesome';

export default class app extends Component {
  state = {
    ascending: true,
    sort: 'sort-amount-asc',
  };

  OnIconPress = () => {
    this.setState({
      ascending: !this.state.ascending,
    });
    let sort = this.state.ascending ? 'sort-amount-desc' : 'sort-amount-asc';
    this.setState({
      sort: sort,
    });
  };
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
        <TouchableOpacity onPress={this.OnIconPress}>
          <Sort name={this.state.sort} />
        </TouchableOpacity>
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
