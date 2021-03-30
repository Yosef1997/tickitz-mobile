import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {time, detailtime} from '../Redux/Action/showTime';

class index extends Component {
  async componentDidMount() {
    await this.props.time();
  }
  selectTime = async (id) => {
    await this.props.detailtime(id);
  };
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.row}>
          <Image source={this.props.source} style={styles.poster} />
          <Text style={styles.text1}>{this.props.address}</Text>
        </View>
        {/* <View style={styles.timecontainer}>
          {this.props.showtime.time.map((item) => {
            return (
              <TouchableOpacity
                key={String(item.id)}
                onPress={() => this.selectTime(item.id)}>
                <Text style={styles.text2}>{item.time}</Text>
              </TouchableOpacity>
            );
          })}
        </View> */}
        <View style={styles.timecontainer}>
          <Text style={styles.text3}>Price</Text>
          <Text style={styles.text4}>${this.props.price}/seat</Text>
        </View>
        <View style={styles.btncontainer}>
          <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.btn1}>
              <Text style={styles.text5}>Book now</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btn2}>
              <Text style={styles.text6}>Add to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    padding: 24,
    marginHorizontal: 24,
    marginVertical: 32,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    elevation: 1,
    borderRadius: 8,
  },
  row: {
    alignItems: 'center',
  },
  text1: {
    color: '#AAAAAA',
    fontSize: 13,
    fontWeight: '300',
    marginTop: 12,
    marginBottom: 39,
  },
  text2: {
    color: '#4E4B66',
    fontSize: 12,
    fontWeight: 'normal',
    width: 54,
    marginRight: 16,
  },
  text3: {
    color: '#6B6B6B',
    fontSize: 14,
    marginTop: 24,
    marginBottom: 32,
  },
  text4: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
  },
  btn1: {
    height: 40,
    width: 134,
    backgroundColor: '#5F2EEA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  btn2: {
    height: 40,
    width: 134,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  text5: {
    color: '#F7F7FC',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text6: {
    color: '#5F2EEA',
    fontSize: 14,
    fontWeight: 'bold',
  },
  poster: {
    height: 39,
    width: 140,
    resizeMode: 'contain',
  },
  btncontainer: {
    flexDirection: 'row',
  },
});

const mapStateToProps = (state) => ({
  showtime: state.cinema,
});

const mapDispatchToProps = {time, detailtime};

export default connect(mapStateToProps, mapDispatchToProps)(index);
