import http from '../../../helper/http';

export const allMovie = (token, search, order, limit, page, sort) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: '',
      });
      const results = await http(token).get(
        `/movie?search=${search !== undefined ? search : ''}&limit=${
          limit !== undefined ? limit : 4
        }&page=${page !== undefined ? page : 1}&sort=${
          sort !== undefined ? sort : 'id'
        }&order=${order !== undefined ? order : 'ASC'}`,
      );
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
        type: 'SHOWTIME_MESSAGE',
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
        type: 'SHOWTIME_MESSAGE',
        payload: message,
      });
    }
  };
};
