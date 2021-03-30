import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {REACT_APP_API_URL as API_URL} from '@env';
import CardPoster from '../components/CardNowShowing';
import SearchBar from '../components/InputViewAll';
import {detailshow} from '../components/Redux/Action/movie';
import {date, location, time} from '../components/Redux/Action/cinema';

class ViewAll extends Component {
  goToDetail = async (id) => {
    await this.props.detailshow(id);
    await this.props.date();
    await this.props.location();
    await this.props.time();
    this.props.navigation.navigate('MovDetail');
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.search}>
          <SearchBar
            Icon="search1"
            placeholder="search"
            keyboardType="default"
          />
        </View>
        <FlatList
          data={this.props.poster.movie}
          keyExtractor={(item, index) => String(item.id)}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <CardPoster
                  source={{uri: API_URL.concat(`/${item.picture}`)}}
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
  poster: state.movie,
});
const mapDispatchToProps = {detailshow, date, location, time};
export default connect(mapStateToProps, mapDispatchToProps)(ViewAll);
