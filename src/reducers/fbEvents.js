import { FETCH_EVENT } from '../actions/facebook/get'


export default (state = {}, { type, payload } = {}) => {
  switch (type) {


    case FETCH_EVENT :
      return payload

    default:
      return state
  }
}
