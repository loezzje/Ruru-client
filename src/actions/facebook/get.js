import graph from 'fb-react-sdk'


export const FETCH_EVENT = 'FETCH_EVENT'

graph.setAccessToken("EAAc01ZAOvEecBAJxElf1SiQKz2Mvh8KttLgvBodKy2PZCkLmhPbor4RV4Mb1lYXEsuirRHtXDMtZCTQHLBBtSLz5RbHlwLK47fMoHtlLJZCohBfnAl8MBRJZA2YnlcSbc0tuNsndb53FYcwwHpK8iItC8mZBFZCrXvHBBhizZA3H9wZDZDs")



  export default () => {
    return (dispatch) => {
      graph
       .get("/TristanKwant.Photography/events?fields=id,name,cover", function(err, res) {
         console.log(res);
         dispatch({
           type: FETCH_EVENT,
           payload: res // remove .data
         })
       })
    }
  }
