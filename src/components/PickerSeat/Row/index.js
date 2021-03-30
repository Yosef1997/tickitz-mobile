import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: this.props.label,
      pickerDisplayed: false,
    };
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue,
    });

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed,
    });
  }

  render() {
    const colValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.togglePicker()}
          style={styles.btnDropdown}>
          <Icon name={this.props.icon} size={18} />
          <Text style={styles.text1}>{this.state.pickerSelection}</Text>
          <Icon name="chevron-small-down" size={18} />
        </TouchableOpacity>
        <Modal
          visible={this.state.pickerDisplayed}
          animationType={'slide'}
          transparent={true}>
          <View style={styles.popup}>
            <Text>Column</Text>
            <ScrollView style={styles.pickerset}>
              {colValues.map((value, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.setPickerValue(value)}
                    style={styles.text2}>
                    <Text>{value}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <TouchableOpacity onPress={() => this.togglePicker()}>
              <Text style={styles.text2}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    margin: 20,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#efefef',
    bottom: 20,
    left: 20,
    right: 20,
    height: 300,
    alignItems: 'center',
    position: 'absolute',
  },
  text1: {
    color: '#4E4B66',
    fontSize: 14,
    fontWeight: '600',
  },
  text2: {
    color: '#4E4B66',
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    textAlign: 'center',
  },
  pickerset: {
    width: '100%',
    marginVertical: 15,
  },
  btnDropdown: {
    flexDirection: 'row',
    backgroundColor: '#EFF0F6',
    width: 120,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
});
