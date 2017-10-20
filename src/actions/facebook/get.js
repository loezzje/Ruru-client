import graph from 'fb-react-sdk'


export const FETCH_EVENT = 'FETCH_EVENT'

graph.setAccessToken("EAACEdEose0cBADUl7CPHwhVCsjQHYCCUOj3kfGMywOZCN5DQ5R5UxRFjK14vM2hVzZCrWZCRZBEBIJiL0qVJpwtZAlmmbAVXAnAENLtZBEYNf2MZCZBr7wNwmbhj6mJTv8qGpQVMHYe9WwWNp4noznO4ebuNKckDZCzj6AzPTaZAgJX1NzOi6fT7r5ZCAZCGMFUrCuEZD")



  export default () => {
    return (dispatch) => {
      graph
       .get("TristanKwant.Photography/events", function(err, res) {
         console.log(res);
         dispatch({
           type: FETCH_EVENT,
           payload: res // remove .data
         })
       })
    }
  }
