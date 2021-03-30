const initialState = {
  token: null,
  user: null,
  detailUser: null,
  message: '',
  errorMsg: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP': {
      return {
        ...state,
        message: action.payload,
      };
    }
    case 'SIGN_IN': {
      return {
        ...state,
        token: action.payload,
        user: action.user,
      };
    }
    case 'DETAIL_USER': {
      return {
        ...state,
        detailUser: action.payload,
      };
    }
    case 'SET_AUTH_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'SIGNOUT': {
      return {
        ...state,
        token: null,
        message: '',
        errorMsg: '',
      };
    }
    default:
      return {...state};
  }
};

export default authReducer;
