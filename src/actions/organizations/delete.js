import API from '../../api'

export const DELETE_ORGANIZATION = 'DELETE_ORGANIZATION'

const api = new API()

export default (organizationId) => {
  return (dispatch) => {

    api.authenticate()
    .then(() => {
      const backend = api.service('organizations')
      backend.remove(organizationId)
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
  )}
}
