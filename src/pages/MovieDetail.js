import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import Detail from '../components/DetailMovie';
import Footer from '../components/Footer';
import DropdownDate from '../components/BtnDropdownDate';
import DropdownLocation from '../components/BtnDropdownLocation';
import CardCinema from '../components/CardCinema';
import moment from 'moment';
import {REACT_APP_API_URL as API_URL} from '@env';
import {connect} from 'react-redux';
import {
  detailDate,
  detailLocation,
  detailCinema,
} from '../components/Redux/Action/showTime';
import {allSoldSeat} from '../components/Redux/Action/order';

class MovieDetail extends Component {
  state = {
    date: 'Set a date',
    location: 'Set a city',
  };
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
  async setDate(newValue, id) {
    this.setState({
      date: newValue,
    });
    await this.props.detailDate(this.props.auth.token, id);
    this.togglePicker();
  }
  async setCinema(id) {
    await this.props.detailCinema(this.props.auth.token, id);
    const {token} = this.props.auth;
    const {order} = this.props;
    await this.props.allSoldSeat(
      token,
      order.detailMovie.name,
      order.detailDate.date,
      order.detailLocation.name,
      order.detailTime.time,
      order.detailCinema.name,
    );
    this.props.navigation.navigate('Order');
  }

  render() {
    const {detailMovie} = this.props.order;
    const {movie} = this.props;
    return (
      <ScrollView style={styles.container}>
        <Detail
          source={{
            uri: `${API_URL}/upload/movie/${detailMovie.picture}`,
          }}
          title={detailMovie.name}
          genre={detailMovie.genre}
          date={moment(detailMovie.releaseDate).format('MMMM D, YYYY')}
          director={detailMovie.director}
          duration={detailMovie.duration}
          actor={detailMovie.star}
          synopsis={detailMovie.description}
        />
        <View style={styles.container3}>
          <Text style={styles.text1}>Showtimes and Tickets</Text>

          <DropdownDate icon="calendar" date={this.state.date} />

          <DropdownLocation icon="location" location={this.state.location} />
        </View>
        <View style={styles.container2}>
          <FlatList
            data={movie.allCinema}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
              <CardCinema
                source={{uri: `${API_URL}/upload/cinema/${item.picture}`}}
                address={item.address}
                price={item.price}
                onPress={() => this.setCinema(item.id)}
              />
            )}
          />
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  container2: {
    paddingVertical: 50,
    justifyContent: 'center',
    backgroundColor: '#F5F6F8',
  },
  container3: {
    backgroundColor: '#F5F6F8',
    paddingTop: 40,
  },
  text1: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie,
  order: state.order,
});

const mapDispatchToProps = {
  detailDate,
  detailLocation,
  detailCinema,
  allSoldSeat,
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
