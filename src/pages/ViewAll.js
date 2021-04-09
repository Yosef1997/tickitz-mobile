import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {REACT_APP_API_URL as API_URL} from '@env';
import CardPoster from '../components/CardNowShowing';
import SearchBar from '../components/InputViewAll';
import {allMovie, detailMovie} from '../components/Redux/Action/movie';
import {
  allDate,
  allLocation,
  allCinema,
  allTime,
} from '../components/Redux/Action/showTime';

class ViewAll extends Component {
  state = {
    search: '',
    ascending: true,
    sort: 'sort-amount-asc',
  };
  goToDetail = async (id) => {
    await this.props.detailMovie(this.props.auth.token, id);
    await this.props.allDate(this.props.auth.token);
    await this.props.allLocation(this.props.auth.token);
    await this.props.allCinema(this.props.auth.token);
    await this.props.allTime(this.props.auth.token);
    this.props.navigation.navigate('MovDetail');
  };
  doSearch = (search) => {
    this.setState({search: search}, async () => {
      await this.props.allMovie(
        this.props.auth.token,
        this.state.search,
        'DESC',
      );
    });
  };
  OnIconPress = (search) => {
    this.setState({
      ascending: !this.state.ascending,
    });
    let sort = this.state.ascending ? 'sort-amount-desc' : 'sort-amount-asc';
    this.setState({
      sort: sort,
    });
    if (this.state.sort === 'sort-amount-asc') {
      this.setState({search: search}, async () => {
        await this.props.allMovie(
          this.props.auth.token,
          this.state.search,
          'DESC',
        );
      });
    } else {
      this.setState({search: search}, async () => {
        await this.props.allMovie(this.props.auth.token, this.state.search);
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <View style={styles.search}>
          <SearchBar
            Icon="search1"
            sort={this.state.sort}
            placeholder="search"
            keyboardType="default"
            onChangeText={(search) => this.doSearch(search)}
            onPress={(search) => this.OnIconPress(search)}
          />
        </View>
        <FlatList
          data={this.props.movie.allMovie}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <CardPoster
                  source={{uri: `${API_URL}/upload/movie/${item.picture}`}}
                  onPress={() => this.goToDetail(item.id)}
                />
              </View>
            );
          }}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  search: {
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie,
});
const mapDispatchToProps = {
  allDate,
  allLocation,
  allCinema,
  allTime,
  allMovie,
  detailMovie,
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewAll);
