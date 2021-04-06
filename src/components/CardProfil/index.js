import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Profil from '../../assets/profil.png';
import Star from '../../assets/Vector.png';
import {connect} from 'react-redux';
import {REACT_APP_API_URL as API_URL} from '@env';

class index extends Component {
  render() {
    const {user} = this.props.auth;
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableOpacity>
            <Text style={styles.text1}>INFO</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text2}>...</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          {user.picture !== null ? (
            <TouchableOpacity>
              <Image
                source={{uri: `${API_URL}/upload/profile/${user.picture}`}}
                style={styles.profil}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={Profil} style={styles.profil} />
            </TouchableOpacity>
          )}
          {user.firstname !== null && user.name !== null ? (
            <Text
              style={styles.text3}>{`${user.firstName} ${user.lastName}`}</Text>
          ) : (
            <Text style={styles.text3}>No name</Text>
          )}
          <Text style={styles.text4}>Moviegoers</Text>
        </View>
        <View>
          <Text style={styles.text5}>Loyalty Points</Text>
        </View>
        <View style={styles.parent}>
          <View style={styles.child}>
            <Text style={styles.text6}>Moviegoers</Text>
            <Text style={styles.text7}>
              320 <Text style={styles.text8}>points</Text>
            </Text>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
            <Image source={Star} style={styles.star} />
          </View>
        </View>
        <View>
          <Text style={styles.text1}>180 points become a master</Text>
        </View>
        <View style={styles.progress}>
          <View style={styles.stat} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingTop: 40,
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 48,
    borderRadius: 8,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 32,
    paddingBottom: 40,
    borderBottomWidth: 0.2,
  },
  profil: {
    height: 136,
    width: 136,
    borderRadius: 136,
  },
  parent: {
    backgroundColor: 'rgba(95, 46, 234, 0.6)',
    left: 4,
    borderRadius: 4,
    width: 234,
    height: 120,
    marginBottom: 23,
  },
  child: {
    width: 243,
    height: 115,
    left: -4.5,
    borderRadius: 8,
    position: 'relative',
    backgroundColor: '#5F2EEA',
    padding: 15,
  },
  circle1: {
    position: 'relative',
    height: 122,
    width: 122,
    borderRadius: 122,
    backgroundColor: 'white',
    bottom: 162,
    left: 128,
    opacity: 0.3,
  },
  circle2: {
    position: 'relative',
    height: 122,
    width: 122,
    borderRadius: 122,
    backgroundColor: 'white',
    bottom: 262,
    left: 153,
    opacity: 0.3,
  },
  star: {
    position: 'relative',
    bottom: 340,
    left: 165,
  },
  text1: {
    color: '#4E4B66',
    fontSize: 16,
  },
  text2: {
    color: '#5F2EEA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text3: {
    color: '#14142B',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 32,
    marginBottom: 4,
  },
  text4: {
    color: '#4E4B66',
    fontSize: 14,
  },
  text5: {
    color: '#4E4B66',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 24,
  },
  text6: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  text7: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  text8: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'normal',
  },
  progress: {
    borderWidth: 0.2,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#F5F6F8',
    marginTop: 8,
    marginBottom: 104,
  },
  stat: {
    backgroundColor: '#5F2EEA',
    width: 100,
    height: 16,
    borderRadius: 8,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(index);
