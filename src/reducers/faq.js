import { FETCH_FAQ } from '../actions/faq/fetch'
import { UPDATE_FAQ } from '../actions/faq/update'

export default (state = [], {type, payload} =  {}) => {
  switch (type)  {
    case FETCH_FAQ :
      return [].concat(payload)

    case UPDATE_FAQ :
      return state.map(function(question){
        return (question._id === payload._id) ? payload : question
      })

  default :
    return state
  }

}
