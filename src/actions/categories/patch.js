import API from '../../api'

export const PATCH_CATEGORY = 'PATCH_CATEGORY'

const api = new API()

export default (id, newdata) => {
  return (dispatch) => {

    // api.authenticate()
    // .then(() => {
    const backend = api.service('categories')
    backend.update(id, {$set:newdata})
    .then((result) => {
      dispatch({
        type: PATCH_CATEGORY,
        payload: result
      })
    })
    .catch((error) => {
      console.log(error)
    })
//   }
// )
}}
