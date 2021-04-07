const initialState = {
  allMovie: null,
  detailMovie: null,
  errorMsg: '',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_MOVIE': {
      return {
        ...state,
        allMovie: action.payload,
      };
    }
    case 'DETAIL_MOVIE': {
      return {
        ...state,
        detailMovie: action.payload,
      };
    }
    case 'SET_MOVIE_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    default:
      return {...state};
  }
};

export default movieReducer;
