import API from '../../api'

export const DELETE_ORGANIZATION = 'DELETE_ORGANIZATION'

const api = new API()

export default (organization) => {
  return (dispatch) => {

    api.authenticate()
    .then(() => {
    const backend = api.service('organizations')
    backend.remove(organization)
    .then((result) => {
      dispatch({
        type: DELETE_ORGANIZATION,
        payload: result
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
)}}
