import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ForgetPass from '../pages/ForgetPass';
import Home from '../pages/LandingPage';
import MovDetail from '../pages/MovieDetail';
import Order from '../pages/Order';
import Payment from '../pages/Payment';
import Ticket from '../pages/Ticket';
import Profil from '../pages/Profil';
import History from '../pages/History';
import Navbar from '../components/Navbar';
import ViewAll from '../pages/ViewAll';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {
  allDate,
  allLocation,
  allCinema,
  allTime,
} from '../components/Redux/Action/showTime';

const Stack = createStackNavigator();

class index extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.allDate(this.props.auth.token);
      this.props.allLocation(this.props.auth.token);
      this.props.allCinema(this.props.auth.token);
      this.props.allTime(this.props.auth.token);
      SplashScreen.hide();
    }, 3000);
  }
  render() {
    return (
      <Stack.Navigator>
        {this.props.auth.token === null ? (
          <React.Fragment>
            <Stack.Screen
              component={SignUp}
              options={{headerShown: false}}
              name="SignUp"
            />
            <Stack.Screen
              component={SignIn}
              options={{headerShown: false}}
              name="SignIn"
            />
            <Stack.Screen
              component={ForgetPass}
              options={{headerShown: false}}
              name="ForgetPass"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen
              component={Home}
              options={{header: (props) => <Navbar {...props} />}}
              name="Home"
            />
            <Stack.Screen
              component={ViewAll}
              options={{header: (props) => <Navbar {...props} />}}
              name="ViewAll"
            />
            <Stack.Screen
              component={MovDetail}
              options={{header: (props) => <Navbar {...props} />}}
              name="MovDetail"
            />
            <Stack.Screen
              component={Order}
              options={{header: (props) => <Navbar {...props} />}}
              name="Order"
            />
            <Stack.Screen
              component={Payment}
              options={{header: (props) => <Navbar {...props} />}}
              name="Payment"
            />
            <Stack.Screen
              component={Ticket}
              options={{header: (props) => <Navbar {...props} />}}
              name="Ticket"
            />
            <Stack.Screen
              component={Profil}
              options={{header: (props) => <Navbar {...props} />}}
              name="Profil"
            />
            <Stack.Screen
              component={History}
              options={{header: (props) => <Navbar {...props} />}}
              name="History"
            />
          </React.Fragment>
        )}
      </Stack.Navigator>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {allDate, allLocation, allCinema, allTime};
export default connect(mapStateToProps, mapDispatchToProps)(index);
