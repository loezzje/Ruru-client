import { FETCH_FAQ } from '../actions/faq/fetch'
import { CREATE_FAQ } from '../actions/faq/create'
import { UPDATE_FAQ } from '../actions/faq/update'
import { DELETE_FAQ } from '../actions/faq/delete'

export default (state = [], {type, payload} =  {}) => {
  switch (type)  {
    case FETCH_FAQ :
      return [].concat(payload)

    case CREATE_FAQ:
      return state.concat(payload)

    case UPDATE_FAQ :
      return state.map(function(question){
        return (question._id === payload._id) ? payload : question
      })

    case DELETE_FAQ:
      return state.filter(question => question._id !== payload._id)

    default :
      return state
  }

}
