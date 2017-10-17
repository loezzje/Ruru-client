import API from '../../api'

export const DELETE_FAQ = 'DELETE_FAQ'

const api = new API()

export default (questionId) => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('faq')
        backend.remove(questionId)
          .then((result) => {
            dispatch({
              type: DELETE_FAQ,
              payload: result
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
