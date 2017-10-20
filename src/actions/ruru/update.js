import API from '../../api'

export const UPDATE_RURU = 'UPDATE_RURU'

const api = new API()

export default (id, newData) => {
  return (dispatch) => {

    api.app.authenticate()
    .then(() => {
      const backend = api.service('ruru')
      backend.update(id, newData)
        .then((result) => {
          dispatch({
            type: UPDATE_RURU,
            payload: result
          })
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
}
