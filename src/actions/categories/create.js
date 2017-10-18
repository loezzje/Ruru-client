import API from '../../api'

export const CREATE_CATEGORY = 'CREATE_CATEGORY'

const api = new API()

export default (category) => {
  return (dispatch) => {

    // api.app.authenticate()
    //   .then(() => {
        const backend = api.service('categories')
        backend.create(category)
          .then((result) => {
            dispatch({
              type: CREATE_CATEGORY,
              payload: result
            })
          })
          .catch((error) => {
            console.log(error)
          })
      // })
  }
}
