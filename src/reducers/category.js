import { FETCH_CATEGORY } from '../actions/categories/get'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case FETCH_CATEGORY:
      return payload

    default:
      return state
  }
}
