import { LOGIN, LOGIN_ERROR, IN_PROGRESS, LOGOUT ,ERROR} from './actionTypes';
const INITIAL_STATE = {
  loggedIn: false,
  loggingIn: false,
  logginError:null,
  userInfo: undefined,
  error: undefined
};

export const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IN_PROGRESS:
        return {
            ...state,
            loggingIn: true
        }
        case LOGIN:
            return {
                ...state,
                loggedIn: true,
                userInfo: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loggedIn: false,
                loggingIn: false,
                userInfo: {},
                logginError: action.payload.msg
            }
        case ERROR:
            return {
                ...state,
                error: action.payload.error
            }
    case LOGOUT:
        return {
            ...INITIAL_STATE
        }
    default:
      return state
  }
};

