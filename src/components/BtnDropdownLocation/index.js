import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: this.props.label,
      pickerDisplayed: false,
    };
  }

  async componentDidMount() {
    await this.props.location();
  }

  setPickerValue(newValue, id) {
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
            <Text>{this.state.pickerSelection}</Text>
            <View style={styles.pickerset}>
              <FlatList
                data={this.props.data}
                keyExtractor={this.props.keyExtractor}
                renderItem={this.props.renderItem}
              />
            </View>
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
    width: 260,
    height: 48,
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginTop: 12,
  },
});

const mapStateToProps = (state) => ({
  cinema: state.cinema,
});

export default connect(mapStateToProps)(index);
