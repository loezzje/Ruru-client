import graph from 'fb-react-sdk'


export const FETCH_EVENT = 'FETCH_EVENT'

graph.setAccessToken("EAAc01ZAOvEecBAJxElf1SiQKz2Mvh8KttLgvBodKy2PZCkLmhPbor4RV4Mb1lYXEsuirRHtXDMtZCTQHLBBtSLz5RbHlwLK47fMoHtlLJZCohBfnAl8MBRJZA2YnlcSbc0tuNsndb53FYcwwHpK8iItC8mZBFZCrXvHBBhizZA3H9wZDZDs")



  export default () => {
    return (dispatch) => {
      graph
<<<<<<< HEAD
       .get("/717575798435027/events?fields=id,name,cover", function(err, res) {
||||||| merged common ancestors
       .get("/TristanKwant.Photography/events?fields=id,name,cover,description,place", function(err, res) {
=======
       .get("/TristanKwant.Photography/events?fields=id,name,cover,description,place,start_time", function(err, res) {
>>>>>>> Setup basic event-component
         console.log(res);
         dispatch({
           type: FETCH_EVENT,
           payload: res // remove .data
         })
       })
    }
  }
