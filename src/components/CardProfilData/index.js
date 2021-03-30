import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import InputCustom from '../InputCustom';
import InputPass from '../InputPassword';
import {connect} from 'react-redux';
import {editUser} from '../Redux/Action/auth';

class index extends Component {
  state = {
    fullname: this.props.user.detailUser.firstname,
    email: this.props.user.detailUser.email,
    phone: this.props.user.detailUser.phone,
  };
  // componentDidUpdate() {
  //   this.props.editUser();
  // }
  doEdit = (fullname, email, phone) => {
    const {id} = this.props.user.detailUser;
    this.props.editUser(id, fullname, email, phone);
  };
  render() {
    return (
      <React.Fragment>
        <View>
          <View>
            <Text style={styles.text1}>Account Settings</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text2}>Details Information</Text>
            <Text style={styles.text3}>Full Name</Text>
            <InputCustom
              placeholder={this.props.user.detailUser.firstname}
              onChangeText={(fullname) => this.setState({fullname})}
            />
            <Text style={styles.text4}>E-mail</Text>
            <InputCustom
              placeholder={this.props.user.detailUser.email}
              onChangeText={(email) => this.setState({email})}
              keyboardType="email-address"
            />
            <Text style={styles.text4}>Phone Number</Text>
            <InputCustom
              text="+62"
              placeholder={this.props.user.detailUser.phone}
              onChangeText={(phone) => this.setState({phone})}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text2}>Account and Privacy</Text>
            <Text style={styles.text3}>New Password</Text>
            <InputPass placeholder=".........." />
            <Text style={styles.text4}>Confirm</Text>
            <InputPass placeholder=".........." />
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.doEdit}>
          <Text style={styles.btntext}>Update changes</Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 24,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 64,
    marginBottom: 24,
  },
  text1: {
    color: '#14142B',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 24,
    marginBottom: 39,
  },
  text2: {
    color: '#14142B',
    fontSize: 16,
    paddingBottom: 8,
    borderBottomWidth: 0.2,
  },
  text3: {
    color: '#4E4B66',
    fontSize: 16,
    marginTop: 41,
    marginBottom: 12,
  },
  text4: {
    color: '#4E4B66',
    fontSize: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#5F2EEA',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 36,
    marginBottom: 72,
  },
  btntext: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => ({
  user: state.auth,
});

const mapDispatchToProps = {editUser};

export default connect(mapStateToProps, mapDispatchToProps)(index);
