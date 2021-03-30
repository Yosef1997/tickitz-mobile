import http from '../../../helper/http';

export const show = () => {
  return async (dispatch) => {
    try {
      const results = await http().get('/usermovies');
      dispatch({
        type: 'SHOW',
        payload: results.data.results,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'SET_SHOW_MESSAGE',
        payload: 'Data Not Found',
      });
    }
  };
};

export const detailshow = (id) => {
  return async (dispatch) => {
    try {
      const results = await http().get(`/usermovies/${id}`);
      dispatch({
        type: 'DETAIL_MOV',
        payload: results.data.results,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_DETAILMOV_MESSAGE',
        payload: message,
      });
    }
  };
};
