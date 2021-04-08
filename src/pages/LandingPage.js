import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Footer from '../components/Footer';
import Moviegoers from '../components/Moviegoers';
import Jumbotron from '../components/Jumbotron';
import CardShow from '../components/CardNowShowing';
import BtnMonth from '../components/BtnMonth';
import CardUpcoming from '../components/CardUpcoming';
import {connect} from 'react-redux';
import {allMovie, detailMovie} from '../components/Redux/Action/movie';
import {
  allDate,
  allLocation,
  allCinema,
  allTime,
} from '../components/Redux/Action/showTime';
import {REACT_APP_API_URL as API_URL} from '@env';

class LandingPage extends Component {
  async componentDidMount() {
    await this.props.allMovie(this.props.auth.token);
  }
  goToDetail = async (id) => {
    await this.props.detailMovie(this.props.auth.token, id);
    await this.props.allDate(this.props.auth.token);
    await this.props.allLocation(this.props.auth.token);
    await this.props.allCinema(this.props.auth.token);
    await this.props.allTime(this.props.auth.token);
    this.props.navigation.navigate('MovDetail');
  };
  render() {
    return (
      <React.Fragment>
        <ScrollView style={styles.container}>
          <Jumbotron />
          <View style={styles.cardsection}>
            <View style={styles.header}>
              <Text style={styles.text1}> Now Showing </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ViewAll')}>
                <Text style={styles.text2}> view all </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              data={this.props.movie.allMovie}
              keyExtractor={(item, index) => String(item.id)}
              renderItem={({item}) => {
                return (
                  <CardShow
                    source={{uri: `${API_URL}/upload/movie/${item.picture}`}}
                    onPress={() => this.goToDetail(item.id)}
                  />
                );
              }}
            />
          </View>
          <View style={styles.Upcomingsection}>
            <View style={styles.Upcomingheader}>
              <Text style={styles.text3}> Upcoming Movies </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ViewAll')}>
                <Text style={styles.text2}> view all </Text>
              </TouchableOpacity>
            </View>
            <BtnMonth />
            <CardUpcoming onPress={() => this.goToDetail()} />
          </View>
          <Moviegoers />
          <Footer />
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  cardsection: {
    backgroundColor: '#D6D8E7',
    paddingHorizontal: 24,
    paddingVertical: 50,
  },
  Upcomingsection: {
    paddingHorizontal: 24,
    paddingVertical: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  Upcomingheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 42,
  },
  text1: {
    color: '#752EEA',
    fontSize: 18,
  },
  text2: {
    color: '#5F2EEA',
    fontSize: 14,
  },
  text3: {
    color: '#14142B',
    fontSize: 18,
  },
  poster: {
    width: 122,
    height: 185,
    borderRadius: 4,
  },
  card: {
    marginTop: 32,
    marginRight: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 6,
    width: 154,
  },
  data: {
    color: 'black',
    fontSize: 16,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie,
});

const mapDispatchToProps = {
  allMovie,
  detailMovie,
  allDate,
  allLocation,
  allCinema,
  allTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
