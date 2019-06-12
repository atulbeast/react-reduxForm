
const url='/articles';
export function saveArticle(user) {
  
    return dispatch => {
      return dispatch({
        type: 'SAVE_ARTICLE',
        payload: client.post(url, {user: user})
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