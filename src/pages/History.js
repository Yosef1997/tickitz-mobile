import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {ScrollView, FlatList, Text, StyleSheet} from 'react-native';
import Footer from '../components/Footer';
import CardHistory from '../components/CardHistoryMovie';
import Theater from '../assets/CineOne21.png';
import ProfilMenu from '../components/ProfilMenu';
import moment from 'moment';
import {connect} from 'react-redux';
import {allPurchase} from '../components/Redux/Action/order';

class History extends Component {
  async componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    const {user, token} = this.props.auth;
    await this.props.allPurchase(token, user.id);
  }

  render() {
    const {order} = this.props;
    return (
      <ScrollView>
        <ProfilMenu Profile={() => this.props.navigation.navigate('Profil')} />
        {order.history === null ? (
          <Text style={styles.text}>Order History Still Empty</Text>
        ) : (
          <FlatList
            data={order.history}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => {
              return (
                <CardHistory
                  image={Theater}
                  date={moment(item.date).format('dddd, DD MMMM YYYY')}
                  time={item.time}
                  movie={item.movie}
                />
              );
            }}
          />
        )}
        {/* <FlatList
          data={order.history}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => {
            return (
              <CardHistory
                image={Theater}
                // date={'Tuesday, 07 July 2020'}
                date={moment(item.date).format('dddd, DD MMMM YYYY')}
                time={item.time}
                movie={item.movie}
              />
            );
          }}
        /> */}
        <Footer />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});
const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});
const mapDispatchToProps = {allPurchase};
export default connect(mapStateToProps, mapDispatchToProps)(History);
