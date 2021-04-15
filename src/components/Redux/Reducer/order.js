const initialState = {
  detailMovie: null,
  detailDate: null,
  detailLocation: null,
  detailCinema: null,
  detailTime: null,
  detailSeat: null,
  seatOrder: null,
  soldSeat: null,
  purchase: null,
  history: null,
  message: '',
  errorMsg: '',
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAIL_MOVIE': {
      return {
        ...state,
        detailMovie: action.payload,
        detailDate: null,
        detailLocation: null,
        detailCinema: null,
        detailTime: null,
      };
    }
    case 'DETAIL_DATE': {
      return {
        ...state,
        detailDate: action.payload,
      };
    }
    case 'DETAIL_LOCATION': {
      return {
        ...state,
        detailLocation: action.payload,
      };
    }
    case 'DETAIL_CINEMA': {
      return {
        ...state,
        detailCinema: action.payload,
      };
    }
    case 'DETAIL_TIME': {
      return {
        ...state,
        detailTime: action.payload,
      };
    }
    case 'DETAIL_SEAT': {
      return {
        ...state,
        detailSeat: action.payload,
      };
    }
    case 'SHOWTIME_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'SEAT_ORDER': {
      return {
        ...state,
        seatOrder: action.payload,
      };
    }
    case 'SOLD_SEAT': {
      return {
        ...state,
        soldSeat: action.payload,
      };
    }
    case 'ORDER_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'PURCHASE': {
      return {
        ...state,
        purchase: action.payload,
      };
    }
    case 'ALL_PURCHASE': {
      return {
        ...state,
        history: action.payload,
      };
    }
    default:
      return {...state};
  }
};

export default orderReducer;
