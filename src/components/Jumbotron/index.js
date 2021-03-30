import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Picture1 from '../../assets/spiderman.png';
import Picture2 from '../../assets/starwars.png';
import Picture3 from '../../assets/lionking.png';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>Nearest Cinema, Newest Movie,</Text>
          <Text style={styles.text2}>Find out now!</Text>
        </View>
        <View style={styles.picGroup}>
          <Image source={Picture1} style={styles.picture1} />
          <Image source={Picture2} style={styles.picture2} />
          <Image source={Picture3} style={styles.picture3} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: 57,
    marginBottom: 168,
  },
  picGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text1: {
    color: '#A0A3BD',
    fontSize: 14,
  },
  text2: {
    color: '#5F2EEA',
    fontSize: 48,
  },
  picture1: {
    marginTop: 124,
  },
  picture2: {
    marginTop: 92,
    marginHorizontal: 21,
  },
  picture3: {
    marginTop: 64,
  },
});
