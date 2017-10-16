
import { MENU_VISIBLE } from '../actions/menuShow.js'
import { MENU_HIDDEN } from '../actions/menuHidden.js'

export default (state = false, { type, payload } = {}) => {
  switch (type) {

        case MENU_VISIBLE:
        return true

        case MENU_HIDDEN:
        return false


    default:
      return state

  }
}
