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
    case 'FETCH_CONTACTS_FULFILLED': {
      return {
        ...state,
        users: action.payload.data.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_CONTACTS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_CONTACTS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    case 'NEW_CONTACT': {
      return {
        ...state,
        user: {}
      }
    }

    case 'SAVE_USER_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_USER_FULFILLED': {
      return {
        ...state,
        user: action.payload.data ,//[...state.users, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_USER_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const {  name, phone, email,password } = data.errors;
      const errors = { global: data.message, name, password, phone, email };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_CONTACT_PENDING': {
      return {
        ...state,
        loading: true,
        user: {name:{}}
      }
    }

    case 'FETCH_CONTACT_FULFILLED': {
      return {
        ...state,
        user: action.payload.data,
        errors: {},
        loading: false
      }
    }

    

    default:
      return state;
  }
}
