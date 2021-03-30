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
      pickerSelection: 'Location',
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
    const pickerValues = [
      {
        title: 'Jakarta Timur',
      },
      {
        title: 'Jakarta Utara',
      },
      {
        title: 'Jakarta Barat',
      },
      {
        title: 'Jakarta Selatan',
      },
      {
        title: 'Depok',
      },
      {
        title: 'Bekasi',
      },
      {
        title: 'Tangerang',
      },
    ];

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.togglePicker()}
          style={styles.btnDropdown}>
          <Text style={styles.text1}>{this.state.pickerSelection}</Text>
          <Icon name="chevron-small-down" size={18} />
        </TouchableOpacity>
        <Modal
          visible={this.state.pickerDisplayed}
          animationType={'slide'}
          transparent={true}>
          <View style={styles.popup}>
            <Text>{this.state.pickerSelection}</Text>
            <ScrollView style={styles.pickerset}>
              {pickerValues.map((value, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.setPickerValue(value.title)}
                    style={styles.text2}>
                    <Text>{value.title}</Text>
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
    marginVertical: 30,
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
    color: '#14142B',
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    marginRight: 13,
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
    width: 260,
    height: 48,
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
});
