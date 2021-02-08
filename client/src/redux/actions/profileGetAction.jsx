import axios from 'axios'
import TokenConfig from './tokenConfig'

const  AddToCartAction=(profile)=>{
    
    return(dispatch,getState)=>{
       
            axios.get('http://localhost:8000/findme/profileget',TokenConfig(getState))
            .then(res=>{
                console.log(res.data)
                dispatch({
                    type:'PROFILE_GET',
                    payload:res.data
                })
            }).catch(err=>{
                console.log(err)
            })
       
    }
}
export default AddToCartAction
