import API from '../../api'

export const FETCH_FAQ = 'FETCH_FAQ'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('faq')
    backend.find()
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCH_FAQ,
        payload: result.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
