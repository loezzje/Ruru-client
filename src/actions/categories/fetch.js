import API from '../../api'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('categories')
    backend.find()
    .then((result) => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: result.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
