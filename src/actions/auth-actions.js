import { client } from '.';

const url = '/auth/login';
export function loginUser(user){
    return dispatch => {
      return dispatch({
        type: 'AUTH_USER',
        payload: client.post(url, user)
      })
    }
  }