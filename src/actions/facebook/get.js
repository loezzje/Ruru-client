import graph from 'fb-react-sdk'


export const FETCH_EVENT = 'FETCH_EVENT'

graph.setAccessToken("EAAc01ZAOvEecBANRpqM7CLZBaHCD6wG6sr2WkIWZAVLqJFdjTJNt0iuZCe3ZBnxeofqnebBIqPlcOuLjWeIjx127xEHHsfDsA1CrwxcttEErzOZB1ZBNlcuiPhk0O3TYdPUnBZBlxXkoRR84YWxyGpkzMnggLD3hZAhp0BbbsWwZAcKQZDZD")



  export default () => {
    return (dispatch) => {
      graph
       .get("/TristanKwant.Photography/events?fields=id,name,cover,description,place,start_time", function(err, res) {
         console.log(res);
         dispatch({
           type: FETCH_EVENT,
           payload: res // remove .data
         })
       })
    }
  }
