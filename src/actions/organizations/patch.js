import API from '../../api'

export const PATCH_ORGANIZATION = 'PATCH_ORGANIZATION'

const api = new API()

export default (id, newdata) => {
  return (dispatch) => {

    api.app.authenticate()
    .then(() => {
      const backend = api.service('organizations')
      backend.update(id, newdata)
      .then((result) => {
        dispatch({
          type: PATCH_ORGANIZATION,
          payload: result
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
  )}
}
