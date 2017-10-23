import API from '../../api'

export const DELETE_CATEGORY = 'DELETE_CATEGORY'

const api = new API()

export default (categoryId) => {
  return (dispatch) => {

    api.app.authenticate()
    .then(() => {
      const backend = api.service('categories')
      backend.remove(categoryId)
      .then((result) => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: result
        })
      })
      .catch((error) => {
        console.log(error)
      })
    })
  }
}
