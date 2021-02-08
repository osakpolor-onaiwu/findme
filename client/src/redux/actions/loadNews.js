import axios from 'axios'


 const NewsAction = (payload) =>{
    
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }


    return (dispatch,getState) => {
        axios.get('http://localhost:8000/findme/news',config)
        .then((response)=>{
            dispatch({
                type:"GET_NEWS",
                response:response.data
            })
        }).catch(err=>{
            dispatch({type:'GET_NEWS_ERROR',err})
        })
    
     }
}

export default NewsAction