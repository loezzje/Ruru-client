import { FETCH_CATEGORIES } from '../actions/categories/fetch'
import { CREATE_CATEGORY } from '../actions/categories/create'
import { DELETE_CATEGORY } from '../actions/categories/delete'
import { PATCH_CATEGORY } from '../actions/categories/patch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return [].concat(payload)

    case CREATE_CATEGORY:
      return state.concat(payload)

    case DELETE_CATEGORY:
      return state.filter(category => category._id !== payload._id)

    case PATCH_CATEGORY :
      return state.map(function(category){ if (category._id === payload._id) return payload;
        return category })

    default:
      return state
  }
}
