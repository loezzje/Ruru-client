import API from '../../api'

export const FETCH_CATEGORY = 'FETCH_CATEGORY'

const api = new API()

export default (categoryId) => {
  return (dispatch) => {
    const backend = api.service('categories')
    backend.get(categoryId)
    .then((result) => {
      dispatch({
        type: FETCH_CATEGORY,
        payload: result // remove .data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
