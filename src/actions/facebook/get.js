import graph from 'fb-react-sdk'


export const FETCH_EVENT = 'FETCH_EVENT'

<<<<<<< HEAD
graph.setAccessToken("EAAc01ZAOvEecBAFPZAISvVcd3yElCVKrviDjQAxJb4ZCDhiYMIZANB6L9sNjZB35VI6eTQOpDrFg7yzQa6HQfO4XnUuhwqIYsZAAmaf58AiH2a9Gy9YsC9RrUOuMq4RNwMe9ZBpZB7LG0g1Hwn4HjiRe6p3iF89na9JOTfbxvB2peKfhG3wJrsfe")
||||||| merged common ancestors
graph.setAccessToken("EAAc01ZAOvEecBAJxElf1SiQKz2Mvh8KttLgvBodKy2PZCkLmhPbor4RV4Mb1lYXEsuirRHtXDMtZCTQHLBBtSLz5RbHlwLK47fMoHtlLJZCohBfnAl8MBRJZA2YnlcSbc0tuNsndb53FYcwwHpK8iItC8mZBFZCrXvHBBhizZA3H9wZDZDs")
=======
graph.setAccessToken("EAAc01ZAOvEecBANRpqM7CLZBaHCD6wG6sr2WkIWZAVLqJFdjTJNt0iuZCe3ZBnxeofqnebBIqPlcOuLjWeIjx127xEHHsfDsA1CrwxcttEErzOZB1ZBNlcuiPhk0O3TYdPUnBZBlxXkoRR84YWxyGpkzMnggLD3hZAhp0BbbsWwZAcKQZDZD")
>>>>>>> Started up page plus route. Deleted useless individual event route



  export default () => {
    return (dispatch) => {
      graph
       .get("/717575798435027/events?fields=id,name,cover", function(err, res) {
         console.log(res);
         dispatch({
           type: FETCH_EVENT,
           payload: res // remove .data
         })
       })
    }
  }
