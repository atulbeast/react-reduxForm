import { combineReducers } from 'redux';
import ContactReducer from './contact-reducer';
import AuthReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  contactStore: ContactReducer,
  authStore: AuthReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
