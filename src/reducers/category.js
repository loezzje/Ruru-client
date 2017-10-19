import { FETCH_CATEGORY } from '../actions/categories/get'
import { PATCH_CATEGORY } from '../actions/categories/patch'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case FETCH_CATEGORY:
      console.log("Returning payload: ", payload)
      return payload

    case PATCH_CATEGORY:
      return payload

    default:
      return state
  }
}
