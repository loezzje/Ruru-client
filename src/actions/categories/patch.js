import API from '../../api'

export const PATCH_CATEGORY = 'FETCH_CATEGORIES'

const api = new API()

export default (categoryId, data) => {
  return (dispatch) => {
    const backend = api.service('categories')
    backend.patch(categoryId, data)
    .then((result) => {
      dispatch({
        type: PATCH_CATEGORY,
        payload: result.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
