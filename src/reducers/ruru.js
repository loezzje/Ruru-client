import { FETCH_RURU  } from '../actions/ruru/fetch'
import { UPDATE_RURU  } from '../actions/ruru/update'

export default (state = [], {type, payload} =  {}) => {
  switch (type)  {
    case FETCH_RURU :
      return [].concat(payload)

    case UPDATE_RURU :
      return [].concat(payload)

    default :
      return state
  }
}
