import { FETCH_ORGANIZATIONS } from '../actions/organizations/fetch'
import { CREATE_ORGANIZATION } from '../actions/organizations/create'
import { DELETE_ORGANIZATION } from '../actions/organizations/delete'
import { PATCH_ORGANIZATION } from '../actions/organizations/patch'

export default (state = [], {type, payload} =  {}) => {
  switch (type)  {
    case FETCH_ORGANIZATIONS :
      return [].concat(payload)

    case CREATE_ORGANIZATION :
      return [state].concat(payload)

    case DELETE_ORGANIZATION :
      return state.filter(organization => organization._id !== payload._id)

    case PATCH_ORGANIZATION :
      return state.filter(function(organization){ if (organization._id === payload._id) return payload;
        return organization })

  default :
    return state
  }

}
