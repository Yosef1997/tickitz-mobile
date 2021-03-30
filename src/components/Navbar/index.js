import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Icon from '../../assets/navbarToggle.png';
import Logo from '../../assets/TickitzLogo.png';
import InputCustom from '../InputCustom';
import Location from '../PickerNavbar';
import {connect} from 'react-redux';
import {signout} from '../Redux/Action/auth';

class index extends Component {
  state = {
    navbartoggle: false,
  };
  OnIconPress = () => {
    this.setState({
      navbartoggle: !this.state.navbartoggle,
    });
  };
  goToProfil = () => {
    this.props.navigation.navigate('Profil');
  };
  doLogout = () => {
    this.props.signout();
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Image source={Logo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.OnIconPress}>
            <Image source={Icon} />
          </TouchableOpacity>
        </View>
        {this.state.navbartoggle && (
          <View style={styles.menu}>
            <InputCustom
              Icon="search1"
              placeholder="search"
              keyboardType="default"
            />
            <Location />
            <Text style={styles.text1}>Movies</Text>
            <Text style={styles.text1}>Cinemas</Text>
            <Text style={styles.text1}>Buy Ticket</Text>
            <TouchableOpacity onPress={this.goToProfil}>
              <Text style={styles.text1}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.doLogout}>
              <Text style={styles.text1}>Sign Out</Text>
            </TouchableOpacity>
            <Text style={styles.copyright}>
              © 2020 Tickitz. All Rights Reserved.
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  menu: {
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },

  text1: {
    color: '#14142B',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 28,
  },
  copyright: {
    color: '#6E7191',
    fontSize: 13,
    marginBottom: 32,
    marginTop: 72,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {signout};

export default connect(mapStateToProps, mapDispatchToProps)(index);
