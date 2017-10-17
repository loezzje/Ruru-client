import API from '../../api'
import { history } from '../../store'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return(dispatch) => {
    api.signIn(user)
    .then((user) => {
      api.app.set('user', user)

      history.replace('/')

      dispatch({
        type: USER_SIGNED_IN,
        payload: user
        })
      })
    .catch((error) => {
      console.log(error)
    })
  }
}
