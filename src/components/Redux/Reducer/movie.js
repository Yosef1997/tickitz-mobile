const initialState = {
  movie: null,
  detailmovie: 'null',
  errorMsg: '',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW': {
      return {
        ...state,
        movie: action.payload,
      };
    }
    case 'DETAIL_MOV': {
      return {
        ...state,
        detailmovie: action.payload,
      };
    }
    case 'SET_SHOW_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'SET_DETAILMOV_MESSAGE': {
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
