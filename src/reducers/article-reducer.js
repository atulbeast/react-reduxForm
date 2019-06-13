

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
        articles: [...state.articles, action.payload.data.data]
        }
    }
    case 'SAVE_ARTICLE_REJECTED': {
           const data = action.payload.data.data;
            // convert feathers error formatting to match client-side error formatting
            const {  email,password } = data.errors;
            const errors = { global: data.message,  password, email };
            return {
            ...state,
            errors: errors,
            loading: false
            }
    }
    case 'UPDATE_ARTICLE_PENDING': {
        return {
        ...state,
        loading: true
        }
    }
    case 'UPDATE_ARTICLE_FULFILLED': {
        const article=action.payload.data.data;
        return {
        ...state,
        loading: false,
        articles: state.articles.map(item => item.id === article.id ? article : item)  ,
        }
    }
    case 'UPDATE_ARTICLE_REJECTED': {
           const data = action.payload.data.data;
            // convert feathers error formatting to match client-side error formatting
            const {  email,password } = data.errors;
            const errors = { global: data.message,  password, email };
            return {
            ...state,
            errors: errors,
            loading: false
            }
    }
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
        articles: [...state.articles, action.payload.data.data]
        }
    }
    case 'SAVE_ARTICLE_REJECTED': {
           const data = action.payload.data.data;
            // convert feathers error formatting to match client-side error formatting
            const {  email,password } = data.errors;
            const errors = { global: data.message,  password, email };
            return {
            ...state,
            errors: errors,
            loading: false
            }
    }
    case 'EDIT_ARTICLE_PENDING': {
        return {
        ...state,
        loading: true
        }
    }
    case 'EDIT_ARTICLE_FULFILLED': {
        return {
        ...state,
        loading: false,
        article: action.payload.data.data,
        }
    }
    case 'EDIT_ARTICLE_REJECTED': {
        const data = action.payload.data.data;
            // convert feathers error formatting to match client-side error formatting
            const { email,password } = data.errors;
            const errors = { global: data.message };
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
        articles: action.payload.data.data
        }
    }
    case 'GET_ARTICLES_REJECTED': {
           const data = action.payload.data.data;
            // convert feathers error formatting to match client-side error formatting
            const { email,password } = data.errors;
            const errors = { global: data.message,  password, email };
            return {
            ...state,
            errors: errors,
            loading: false
            }
    }
    case 'DELETE_ARTICLE_PENDING': {
        return {
        ...state,
        loading: true
        }
    }
    case 'DELETE_ARTICLE_FULFILLED': {
        debugger
        const id = action.payload.data.id;
        return {
        ...state,
        loading: false,
        articles:  state.articles.filter(item => item.id != id) 
        }
    }
    case 'DELETE_ARTICLE_REJECTED': {
           const data = action.payload.data.data;
            // convert feathers error formatting to match client-side error formatting
            
            const errors = { global: data.message};
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
