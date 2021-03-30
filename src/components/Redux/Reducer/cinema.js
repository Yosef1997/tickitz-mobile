const initialState = {
  cinema: null,
  idCinema: null,
  date: null,
  idDate: null,
  location: null,
  idLocation: null,
  time: null,
  idTime: null,
  errorMsg: '',
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CINEMA': {
      return {
        ...state,
        cinema: action.payload,
      };
    }
    case 'DETAIL_CINEMA': {
      return {
        ...state,
        idCinema: action.payload,
      };
    }
    case 'DATE': {
      return {
        ...state,
        date: action.payload,
      };
    }
    case 'DETAIL_DATE': {
      return {
        ...state,
        idDate: action.payload,
      };
    }
    case 'LOCATION': {
      return {
        ...state,
        location: action.payload,
      };
    }
    case 'DETAIL_LOCATION': {
      return {
        ...state,
        idLocation: action.payload,
      };
    }
    case 'TIME': {
      return {
        ...state,
        time: action.payload,
      };
    }
    case 'DETAIL_TIME': {
      return {
        ...state,
        idTime: action.payload,
      };
    }
    case 'SET_CINEMA_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    default:
      return {...state};
  }
};

export default cinemaReducer;
