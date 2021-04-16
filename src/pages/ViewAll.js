import React, {Component} from 'react';
import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import http from '../helper/http';
import {REACT_APP_API_URL as API_URL} from '@env';
import CardPoster from '../components/CardNowShowing';
import SearchBar from '../components/InputViewAll';
import LoadMore from '../components/LoadMore';
import {
  allMovie,
  detailMovie,
  newDataMovieFlatList,
} from '../components/Redux/Action/movie';
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
    listRefresh: false,
    nextLink: '',
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
  fetchNewData = async () => {
    try {
      this.setState({listRefresh: true});
      const oldData = this.props.movie.allMovie;
      const response = await http(this.props.auth.token).get(
        `${this.props.movie.pageInfoMovie.nextLink}`,
      );
      const resultResponse = response.data.results;
      const newData = [...oldData, ...resultResponse];
      this.props.newDataMovieFlatList(newData, response.data.pageInfo);
      this.setState({listRefresh: false});
    } catch (err) {
      console.log(err.response);
      this.setState({listRefresh: false});
    }
  };
  nextData = async () => {
    try {
      const oldData = this.props.movie.allMovie;
      const response = await http(this.props.auth.token).get(
        `${this.props.movie.pageInfoMovie.nextLink}`,
      );
      // const response = await http(this.props.auth.token).get('/movie');
      const resultResponse = response.data.results;
      const newData = [...oldData, ...resultResponse];
      this.props.newDataMovieFlatList(newData, response.data.pageInfo);
    } catch (err) {
      console.log(err);
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
        {this.props.movie.isLoading === true ? (
          <ActivityIndicator
            size="large"
            color="black"
            style={styles.loading}
          />
        ) : (
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
            refreshing={this.state.listRefresh}
            onRefresh={this.fetchNewData}
            onEndReached={this.nextData}
            onEndReachedThreshold={1}
            ListFooterComponent={<LoadMore nextLink={null} />}
          />
        )}
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
  loading: {
    marginTop: 30,
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
  newDataMovieFlatList,
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewAll);
