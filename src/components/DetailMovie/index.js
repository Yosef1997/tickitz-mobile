import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View>
        <View style={styles.parent}>
          <View style={styles.card}>
            <Image source={this.props.source} style={styles.poster} />
          </View>
        </View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.genre}>{this.props.genre}</Text>
        <View style={styles.detailcard}>
          <Text style={styles.text1}>Release date</Text>
          <Text style={styles.text1}>Directed by</Text>
        </View>
        <View style={styles.detailcard}>
          <Text style={styles.text2}>{this.props.date}</Text>
          <Text style={styles.text2}>{this.props.director}</Text>
        </View>
        <View style={styles.detailcard}>
          <Text style={styles.text1}>Duration</Text>
          <Text style={styles.text1}>Casts</Text>
        </View>
        <View style={styles.detailcard}>
          <Text style={styles.text2}>{this.props.duration}</Text>
          <Text style={styles.text2}>{this.props.actor}</Text>
        </View>
        <View style={styles.synopsis}>
          <Text style={styles.text3}>Synopsis</Text>
          <Text style={styles.text4}>{this.props.synopsis}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    marginTop: 37,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 32,
    width: 223,
    justifyContent: 'center',
  },
  poster: {
    borderRadius: 6,
    width: 159,
    height: 185,
  },
  title: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 32,
    textAlign: 'center',
  },
  genre: {
    color: '#4E4B66',
    fontWeight: 'normal',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  detailcard: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  text1: {
    alignItems: 'flex-start',
    width: '50%',
    color: '#8692A6',
    fontSize: 13,
  },
  text2: {
    color: '#121212',
    fontSize: 16,
    width: '50%',
    marginBottom: 22,
  },
  synopsis: {
    paddingHorizontal: 24,
  },
  text3: {
    color: '#14142B',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 64,
  },
  text4: {
    color: '#4E4B66',
    fontSize: 13,
    fontWeight: 'normal',
    marginTop: 16,
    marginBottom: 56,
  },
});
