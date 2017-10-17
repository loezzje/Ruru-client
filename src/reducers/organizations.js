import { FETCH_ORGANIZATIONS } from '../actions/organizations/fetch'

export default (state = [], {type, payload} =  {}) => {
  switch (type)  {
    case FETCH_ORGANIZATIONS :
      return [].concat(payload)

  default :
    return state
  }

}
