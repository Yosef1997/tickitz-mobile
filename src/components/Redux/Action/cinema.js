import http from '../../../helper/http';

export const cinema = () => {
  return async (dispatch) => {
    try {
      const results = await http().get('/cinemas');
      dispatch({
        type: 'CINEMA',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'SET_CINEMA_MESSAGE',
        payload: 'Data Not Found',
      });
    }
  };
};

export const date = () => {
  return async (dispatch) => {
    try {
      const results = await http().get('/showdate');
      dispatch({
        type: 'DATE',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'SET_CINEMA_MESSAGE',
        payload: 'Data Not Found',
      });
    }
  };
};

export const location = () => {
  return async (dispatch) => {
    try {
      const results = await http().get('/location');
      dispatch({
        type: 'LOCATION',
        payload: results.data.results,
      });
    } catch (err) {
      dispatch({
        type: 'SET_CINEMA_MESSAGE',
        payload: 'Data Not Found',
      });
    }
  };
};

export const time = () => {
  return async (dispatch) => {
    try {
      const results = await http().get('/showtime');
      dispatch({
        type: 'TIME',
        payload: results.data.results,
      });
    } catch (err) {
      dispatch({
        type: 'SET_CINEMA_MESSAGE',
        payload: 'Data Not Found',
      });
    }
  };
};
