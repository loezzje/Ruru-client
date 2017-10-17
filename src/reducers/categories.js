import { FETCH_CATEGORIES } from '../actions/categories/fetch'
import { CREATE_CATEGORY } from '../actions/categories/create'
import { DELETE_CATEGORY } from '../actions/categories/delete'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return [].concat(payload)

    case CREATE_CATEGORY:
      return state.concat(payload)

    case DELETE_CATEGORY:
      return state.filter(category => category._id !== payload._id)

    default:
      return state
  }
}
