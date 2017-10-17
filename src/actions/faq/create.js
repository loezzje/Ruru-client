import API from '../../api'

export const CREATE_FAQ = 'CREATE_FAQ'

const api = new API()

export default (question) => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('faq')
        backend.create(question)
          .then((result) => {
            dispatch({
              type: CREATE_FAQ,
              payload: result
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
