import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Footer from '../components/Footer';
import CardHistory from '../components/CardHistoryMovie';
import Theater from '../assets/CineOne21.png';
import ProfilMenu from '../components/ProfilMenu';

export default class History extends Component {
  render() {
    return (
      <ScrollView>
        <ProfilMenu Profile={() => this.props.navigation.navigate('Profil')} />
        <CardHistory
          image={Theater}
          date={'Tuesday, 07 July 2020'}
          time={'04:30pm'}
          movie={'Spider-Man: Homecoming'}
        />
        <Footer />
      </ScrollView>
    );
  }
}
