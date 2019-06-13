import { client } from ".";

const url='/articles';
export function saveArticle(user) {
  
    return dispatch => {
      return dispatch({
        type: 'SAVE_ARTICLE',
        payload: client.post(url, {article: user})
      })
    }
  }
  export function updateArticle(user) {
  
    return dispatch => {
      return dispatch({
        type: 'UPDATE_ARTICLE',
        payload: client.put(url+'/'+user.id, {article: user})
      })
    }
  }
  export function editArticle(id) {
  
    return dispatch => {
      return dispatch({
        type: 'EDIT_ARTICLE',
        payload: client.get(url+'/'+id)
      })
    }
  }
  export function deleteArticle(id) {
  
    return dispatch => {
      return dispatch({
        type: 'DELETE_ARTICLE',
        payload: client.delete(url+'/'+id)
      })
    }
  }
  
  

  export function allArticles() {
  
    return dispatch => {
      return dispatch({
        type: 'GET_ARTICLES',
        payload: client.get(url)
      })
    }
  }