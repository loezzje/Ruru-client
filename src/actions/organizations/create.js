import API from '../../api'

export const CREATE_ORGANIZATION = 'CREATE_ORGANIZATION'

const api = new API()

export default (organization) => {
  return (dispatch) => {

    api.app.authenticate()
    .then(() => {
      const backend = api.service('organizations')
      backend.create(organization)
      .then((result) => {
        dispatch({
          type: CREATE_ORGANIZATION,
          payload: result
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
  )}
}
