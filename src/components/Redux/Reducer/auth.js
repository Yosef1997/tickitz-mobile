const initialState = {
  token: null,
  user: null,
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
    case 'UPDATE_USER': {
      return {
        ...state,
        user: {...state.user, ...action.payload},
        message: action.message,
      };
    }
    case 'DELETE_PICTURE': {
      return {
        ...state,
        user: {...state.user, ...action.payload},
        message: action.message,
      };
    }
    case 'SET_AUTH_MESSAGE': {
      return {
        ...state,
        message: '',
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
