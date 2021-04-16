import http from '../../../helper/http';
import moment from 'moment';

// Seat
export const seatOrder = (seat) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: '',
      });
      dispatch({
        type: 'SEAT_ORDER',
        payload: seat,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: 'Order failed',
      });
    }
  };
};

// Sold Seat
export const allSoldSeat = (token, movie, date, location, time, cinema) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append('movie', movie);
    form.append('date', moment(date).format('YYYY-MM-DD'));
    form.append('location', location);
    form.append('time', time);
    form.append('cinema', cinema);
    try {
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: '',
      });
      const results = await http(token).post('/seat/sold', form);
      dispatch({
        type: 'SOLD_SEAT',
        payload: results.data.results.seat,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: message,
      });
    }
  };
};

// Purchase
export const purchase = (
  token,
  movie,
  date,
  location,
  time,
  cinema,
  idSeat,
  createdBy,
) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append('movie', movie);
    form.append('date', moment(date).format('YYYY-MM-DD'));
    form.append('location', location);
    form.append('time', time);
    form.append('cinema', cinema);
    idSeat.map((item) => form.append('idSeat', item));
    form.append('createdBy', createdBy);
    try {
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: '',
      });
      const results = await http(token).post('/purchase', form);
      dispatch({
        type: 'PURCHASE',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: message,
      });
    }
  };
};

export const allPurchase = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: '',
      });
      const results = await http(token).post('/purchase/history', id);
      dispatch({
        type: 'ALL_PURCHASE',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: message,
      });
    }
  };
};
