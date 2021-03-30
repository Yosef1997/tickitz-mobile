import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Detail from '../components/DetailMovie';
import Footer from '../components/Footer';
import DropdownDate from '../components/BtnDropdownDate';
import DropdownLocation from '../components/BtnDropdownLocation';
import CardCinema from '../components/CardCinema';
import {connect} from 'react-redux';
import moment from 'moment';
import {REACT_APP_API_URL as API_URL} from '@env';
import {
  cinema,
  date,
  location,
  detailcinema,
  detaildate,
  detaillocation,
} from '../components/Redux/Action/cinema';

class MovieDetail extends Component {
  state = {
    date: 'Set a date',
    location: 'Set a location',
  };
  async componentDidMount() {
    await this.props.cinema();
    await this.props.date();
    await this.props.location();
  }
  setDate(newValue, id) {
    this.setState({
      date: newValue,
    });
    this.props.detaildate(id);
    // this.togglePicker();
  }
  setLocation(newValue, id) {
    this.setState({
      date: newValue,
    });
    this.props.detaillocation(id);
    // this.togglePicker();
  }
  goToOrder = async (id) => {
    await this.props.detailcinema(id);
    this.props.navigation.navigate('Order');
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Detail
          source={{
            uri: API_URL.concat(`/${this.props.movie.detailmovie.picture}`),
          }}
          title={this.props.movie.detailmovie.name}
          genre={this.props.movie.detailmovie.genre}
          date={moment(this.props.movie.detailmovie.releaseDate).format(
            'MMMM D, YYYY',
          )}
          director={this.props.movie.detailmovie.director}
          duration={this.props.movie.detailmovie.duration}
          actor={this.props.movie.detailmovie.stars}
          synopsis={this.props.movie.detailmovie.description}
        />
        <View style={styles.container3}>
          <Text style={styles.text1}>Showtimes and Tickets</Text>
          <DropdownDate
            icon="calendar"
            label={this.state.date}
            data={this.props.listcinema.date}
            keyExtractor={(item, index) => String(item.id)}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={this.setDate(item.date, item.id)}>
                  <Text>{`${moment(item.date).format('MMMM D, YYYY')}`}</Text>
                </TouchableOpacity>
              );
            }}
          />
          <DropdownLocation icon="location" label="Set a city" />
        </View>
        <View style={styles.container2}>
          <FlatList
            data={this.props.listcinema.cinema}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
              <CardCinema
                source={{uri: API_URL.concat(`/${item.picture}`)}}
                address={item.address}
                price={item.price}
                onPress={() => this.goToOrder(item.id)}
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
  movie: state.movie,
  listcinema: state.cinema,
});

const mapDispatchToProps = {cinema, detailcinema, detaildate, detaillocation};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
