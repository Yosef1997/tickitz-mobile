import http from '../../../helper/http';

export const detailcinema = (id) => {
  return async (dispatch) => {
    try {
      const results = await http().get(`/cinemas/${id}`);
      dispatch({
        type: 'DETAIL_CINEMA',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_CINEMA_MESSAGE',
        payload: message,
      });
    }
  };
};

export const detaildate = (id) => {
  return async (dispatch) => {
    try {
      const results = await http().get(`/showdate/${id}`);
      dispatch({
        type: 'DETAIL_DATE',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_CINEMA_MESSAGE',
        payload: message,
      });
    }
  };
};

export const detaillocation = (id) => {
  return async (dispatch) => {
    try {
      const results = await http().get(`/location/${id}`);
      dispatch({
        type: 'DETAIL_LOCATION',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_CINEMA_MESSAGE',
        payload: message,
      });
    }
  };
};

export const detailtime = (id) => {
  return async (dispatch) => {
    try {
      const results = await http().get(`/showtime/${id}`);
      dispatch({
        type: 'DETAIL_TIME',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_CINEMA_MESSAGE',
        payload: message,
      });
    }
  };
};
