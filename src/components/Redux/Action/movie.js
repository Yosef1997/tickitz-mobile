import http from '../../../helper/http';

export const allMovie = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: '',
      });
      const results = await http(token).get('/movie');
      dispatch({
        type: 'ALL_MOVIE',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: message,
      });
    }
  };
};

export const detailMovie = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: '',
      });
      const results = await http(token).get(`/movie/${id}`);
      dispatch({
        type: 'DETAIL_MOVIE',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: message,
      });
    }
  };
};
