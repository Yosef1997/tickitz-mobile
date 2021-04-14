import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Footer from '../components/Footer';
import CardHistory from '../components/CardHistoryMovie';
import Theater from '../assets/CineOne21.png';
import ProfilMenu from '../components/ProfilMenu';
import {connect} from 'react-redux';
import {allPurchase} from '../components/Redux/Action/order';

class History extends Component {
  async componentDidMount() {
    const {user, token} = this.props.auth;
    await this.props.allPurchase(token, user.id);
  }

  render() {
    return (
      <ScrollView>
        <ProfilMenu Profile={() => this.props.navigation.navigate('Profil')} />
        <CardHistory
          image={Theater}
          date={'Tuesday, 07 July 2020'}
          time={'04:30pm'}
          movie={'Spider-Man: Homecoming'}
        />
        <Footer />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});
const mapDispatchToProps = {allPurchase};
export default connect(mapStateToProps, mapDispatchToProps)(History);
