const initialState = {
  allMovie: null,
  allDate: null,
  allLocation: null,
  allCinema: null,
  allTime: null,
  // detailMovie: null,
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
    case 'ALL_DATE': {
      return {
        ...state,
        allDate: action.payload,
      };
    }
    case 'ALL_LOCATION': {
      return {
        ...state,
        allLocation: action.payload,
      };
    }
    case 'ALL_CINEMA': {
      return {
        ...state,
        allCinema: action.payload,
      };
    }
    case 'ALL_TIME': {
      return {
        ...state,
        allTime: action.payload,
      };
    }
    // case 'DETAIL_MOVIE': {
    //   return {
    //     ...state,
    //     detailMovie: action.payload,
    //   };
    // }
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
