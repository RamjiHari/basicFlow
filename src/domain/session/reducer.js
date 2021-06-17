import { LOGIN, LOGIN_ERROR, IN_PROGRESS, LOGOUT ,ERROR , VALIDATION ,VALIDATION_ERROR} from './actionTypes';
const INITIAL_STATE = {
  loggedIn: false,
  loggingIn: false,
  userToken: null,
  logginError:'',
  userInfo: '',
  error: '',
  valid : true,
  valid_msg :''
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
                loggingIn: false,
                userToken:action.payload.token,
                userInfo: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loggedIn: false,
                loggingIn: false,
                userToken:null,
                logginError: action.payload.msg
            }
            case VALIDATION:
                return {
                    ...state,
                    valid : action.payload.valid,
                    valid_msg : ''
                }
                case VALIDATION_ERROR:
                return {
                    ...state,
                    valid : action.payload.valid ,
                    valid_msg : action.payload.msg
                }
        case ERROR:
            return {
                ...state,
                loggedIn: false,
                loggingIn: false,
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

