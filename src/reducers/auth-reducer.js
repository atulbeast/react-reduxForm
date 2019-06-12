

const defaultState = {
    users: [],
    articles:[],
    article:{},
    user: {},
    loading: false,
    errors:{}
  }
  
export default (state=defaultState, action={}) => {
   switch (action.type) {
    case 'SIGNOUT_PENDING': {
        return {
        ...state,
        loading: true
        }
    }
    case 'SIGNOUT_FULFILLED': {
        localStorage.removeItem('d_token');
        return {
        ...state,
        loading: false
        }
    }
    case 'SIGNOUT_REJECTED': {
        return {
            ...state,
            errors: {},
            loading: false
            }
    }
        case 'AUTH_USER_PENDING': {
            return {
            ...state,
            loading: true
            }
        }

        case 'AUTH_USER_FULFILLED': {
            localStorage.setItem('d_token',action.payload.data.token);
            return {
            ...state,
            user: action.payload.data ,//[...state.users, action.payload.data],
            errors: {},
            loading: false
            }
        }

        case 'AUTH_USER_REJECTED': {
            const data = action.payload.response.data;
            // convert feathers error formatting to match client-side error formatting
            const {  email,password } = data.errors;
            const errors = { global: data.message,  password, email };
            return {
            ...state,
            errors: errors,
            loading: false
            }
        }

        default:
        return state;
}
}
