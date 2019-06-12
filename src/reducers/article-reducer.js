

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
    case 'SAVE_ARTICLE_PENDING': {
        return {
        ...state,
        loading: true
        }
    }
    case 'SAVE_ARTICLE_FULFILLED': {
        return {
        ...state,
        loading: false,
        articles: action.payload.response.data
        }
    }
    case 'SAVE_ARTICLE_REJECTED': {
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
    case 'GET_ARTICLES_PENDING': {
        return {
        ...state,
        loading: true
        }
    }
    case 'GET_ARTICLES_FULFILLED': {
        return {
        ...state,
        loading: false,
        articles: action.payload.response.data
        }
    }
    case 'GET_ARTICLES_REJECTED': {
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
