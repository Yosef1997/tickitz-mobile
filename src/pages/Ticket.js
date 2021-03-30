import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import CardTicket from '../components/Ticket';
import Footer from '../components/Footer';

export default class Ticket extends Component {
  render() {
    return (
      <ScrollView style={styles.parent}>
        <View>
          <CardTicket />
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F5F6F8',
  },
});
