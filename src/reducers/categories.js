import { FETCH_CATEGORIES } from '../actions/categories/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return [].concat(payload)

    default:
      return state
  }
}
