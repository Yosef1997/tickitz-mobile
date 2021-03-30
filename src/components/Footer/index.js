import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Logo from '../../assets/TickitzLogo.png';
import Ebv from '../../assets/ebv.id.png';
import Cineone from '../../assets/CineOne21.png';
import Hiflix from '../../assets/hiflix.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtube.png';
import Twitter from '../../assets/twitter.png';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.text1}>
            Stop waiting in line. Buy tickets {'\n'}conveniently, watch movies
            quietly.
          </Text>
        </View>
        <View>
          <Text style={styles.header}>Explore</Text>
          <View style={styles.explore}>
            <Text style={styles.text2}>Cinemas</Text>
            <Text style={styles.text2}>Movies List</Text>
            <Text style={styles.text2}>Notification</Text>
          </View>
          <Text style={styles.text2}>My Ticket</Text>
        </View>
        <View>
          <Text style={styles.header}>Our Sponsor</Text>
          <View style={styles.explore}>
            <Image source={Ebv} style={styles.sponsor1} />
            <Image source={Cineone} style={styles.sponsor2} />
            <Image source={Hiflix} style={styles.sponsor1} />
          </View>
        </View>
        <View>
          <Text style={styles.header}>Follow us</Text>
          <View style={styles.explore}>
            <Image source={Facebook} style={styles.media} />
            <Image source={Instagram} style={styles.media} />
            <Image source={Twitter} style={styles.media} />
            <Image source={Youtube} style={styles.media} />
          </View>
        </View>
        <View>
          <Text style={styles.copyright}>
            © 2020 Tickitz. All Rights Reserved.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 76,
    backgroundColor: 'white',
    marginTop: 40,
  },
  logo: {
    width: 142,
    height: 37,
  },
  text1: {
    color: '#6E7191',
    fontSize: 14,
    marginTop: 24,
  },
  text2: {
    fontSize: 14,
    color: '#6E7191',
    marginRight: 41,
    marginBottom: 12,
  },
  header: {
    marginTop: 48,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  explore: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sponsor2: {
    marginHorizontal: 25,
  },
  media: {
    marginRight: 41,
  },
  copyright: {
    color: '#6E7191',
    fontSize: 13,
    marginTop: 67,
  },
});
