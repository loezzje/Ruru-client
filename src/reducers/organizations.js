import { FETCH_ORGANIZATIONS } from '../actions/organizations/fetch'
import { CREATE_ORGANIZATION } from '../actions/organizations/create'
import { DELETE_ORGANIZATION } from '../actions/organizations/delete'

export default (state = [], {type, payload} =  {}) => {
  switch (type)  {
    case FETCH_ORGANIZATIONS :
      return [].concat(payload)

    case CREATE_ORGANIZATION :
      return [state].concat(payload)

    case DELETE_ORGANIZATION :
      return state.filter(organization => organization._id !== payload._id)

  default :
    return state
  }

}
