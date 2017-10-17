import API from '../../api'

export const DELETE_CATEGORY = 'DELETE_CATEGORY'

const api = new API()

export default (category) => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('categories')
        backend.remove(category)
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
