import API from '../../api'

export const UPDATE_FAQ = 'UPDATE_FAQ'

const api = new API()

export default (id, newData) => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('faq')
        backend.update(id, { $set: newData })
          .then((result) => {
            dispatch({
              type: UPDATE_FAQ,
              payload: result
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
