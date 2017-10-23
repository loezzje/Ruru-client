import graph from 'fb-react-sdk'


export const FETCH_EVENT = 'FETCH_EVENT'

graph.setAccessToken("EAAc01ZAOvEecBAFPZAISvVcd3yElCVKrviDjQAxJb4ZCDhiYMIZANB6L9sNjZB35VI6eTQOpDrFg7yzQa6HQfO4XnUuhwqIYsZAAmaf58AiH2a9Gy9YsC9RrUOuMq4RNwMe9ZBpZB7LG0g1Hwn4HjiRe6p3iF89na9JOTfbxvB2peKfhG3wJrsfe")



  export default (id) => {
    console.log(id)
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
