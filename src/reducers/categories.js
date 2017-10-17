import { FETCH_CATEGORIES } from '../actions/categories/fetch'
import { CREATE_CATEGORY } from '../actions/categories/create'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return [].concat(payload)

    case CREATE_CATEGORY:
      return state.concat(payload)

    default:
      return state
  }
}
