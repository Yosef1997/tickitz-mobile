import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Poster from '../../assets/F9.jpg';

export default class index extends Component {
  state = {
    movie: [
      {
        title: 'F9',
        genre: 'Car, Action',
        image: Poster,
      },
      {
        title: 'F9',
        genre: 'Car, Action',
        image: Poster,
      },
      {
        title: 'F9',
        genre: 'Car, Action',
        image: Poster,
      },
      {
        title: 'F9',
        genre: 'Car, Action',
        image: Poster,
      },
      {
        title: 'F9',
        genre: 'Car, Action',
        image: Poster,
      },
    ],
  };
  render() {
    return (
      <ScrollView horizontal>
        {this.state.movie.map((movie, index) => {
          return (
            <View key={String(index)} style={styles.card}>
              <Image source={movie.image} style={styles.img} />
              <Text style={styles.text1}>{movie.title}</Text>
              <Text style={styles.text2}>{movie.genre}</Text>
              <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.btn}>
                  <Text style={styles.btnFont}>Details</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 6,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 40,
    marginRight: 16,
    width: 152,
  },
  img: {
    width: 120,
    borderRadius: 4,
  },
  text1: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  text2: {
    color: '#A0A3BD',
    fontWeight: '300',
    fontSize: 11,
    marginBottom: 24,
    height: 30,
    textAlign: 'center',
  },
  btn: {
    height: 25,
    borderColor: '#5F2EEA',
    borderRadius: 4,
    borderWidth: 1,
  },
  btnFont: {
    color: '#5F2EEA',
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
  },
});
