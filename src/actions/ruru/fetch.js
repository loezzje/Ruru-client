import API from '../../api'

export const FETCH_RURU = 'FETCH_RURU'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('ruru')
    backend.find()
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCH_RURU,
        payload: result.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
