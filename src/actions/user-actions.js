import { client } from '.';

const url = '/users';

export function fetchContacts(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: client.get(url)
    })
  }
}

export function newContact() {
  return dispatch => {
    dispatch({
      type: 'NEW_CONTACT'
    })
  }
}

export function saveContact(user) {
  
  return dispatch => {
    return dispatch({
      type: 'SAVE_CONTACT',
      payload: client.post(url, {user: user})
    })
  }
}



export function fetchContact(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_CONTACT',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updateContact(user) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_CONTACT',
      payload: client.put(`${url}/${user._id}`, user)
    })
  }
}

export function deleteContact(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_CONTACT',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
