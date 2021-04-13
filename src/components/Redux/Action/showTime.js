import http from '../../../helper/http';

// Date
export const allDate = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: '',
      });
      const results = await http(token).get('/date');
      dispatch({
        type: 'ALL_DATE',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: message,
      });
    }
  };
};

export const detailDate = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: '',
      });
      const results = await http(token).get(`/date/${id}`);
      dispatch({
        type: 'DETAIL_DATE',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: message,
      });
    }
  };
};

// Location
export const allLocation = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: '',
      });
      const results = await http(token).get('/location');
      dispatch({
        type: 'ALL_LOCATION',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: message,
      });
    }
  };
};

export const detailLocation = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: '',
      });
      const results = await http(token).get(`/location/${id}`);
      dispatch({
        type: 'DETAIL_LOCATION',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: message,
      });
    }
  };
};

// Cinema
export const allCinema = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: '',
      });
      const results = await http(token).get('/cinema');
      dispatch({
        type: 'ALL_CINEMA',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: message,
      });
    }
  };
};

export const detailCinema = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: '',
      });
      const results = await http(token).get(`/cinema/${id}`);
      dispatch({
        type: 'DETAIL_CINEMA',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: message,
      });
    }
  };
};

// Time
export const allTime = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: '',
      });
      const results = await http(token).get('/time');
      dispatch({
        type: 'ALL_TIME',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: message,
      });
    }
  };
};

export const detailTime = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: '',
      });
      const results = await http(token).get(`/time/${id}`);
      dispatch({
        type: 'DETAIL_TIME',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: message,
      });
    }
  };
};

// Seat
export const seatOrder = (seat) => ({
  type: 'SEAT_ORDER',
  payload: seat,
});
