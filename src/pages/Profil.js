import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import ProfilMenu from '../components/ProfilMenu';
import CardProfil from '../components/CardProfil';
import CardProfilData from '../components/CardProfilData';
import CardPass from '../components/CardChangePass';
import Footer from '../components/Footer';

export default class Profil extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ProfilMenu History={() => this.props.navigation.navigate('History')} />
        <CardProfil />
        <CardProfilData />
        {/* <CardPass /> */}
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6F8',
  },
});
