import { FETCH_RURU  } from '../actions/ruru/fetch'

export default (state = [], {type, payload} =  {}) => {
  switch (type)  {
    case FETCH_RURU :
      return [].concat(payload)

    default :
      return state
  }
}
