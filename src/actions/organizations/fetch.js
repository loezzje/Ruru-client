import API from '../../api'

export const FETCH_ORGANIZATIONS = 'FETCH_ORGANIZATIONS'

const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('organizations')
    backend.find()
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCH_ORGANIZATIONS,
        payload: result.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
