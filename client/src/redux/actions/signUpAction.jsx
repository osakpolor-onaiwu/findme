import axios from 'axios'
import GetError from './errorAction'
 
const signUpAction = (newUser) =>{
      return (dispatch)=>{
         //headers
         const config={
             headers:{
                 "Content-Type":"application/json"
             }
         }
     
         //Request body
         const body=JSON.stringify(newUser)
     
         axios.post("/findme/api/users",body,config)
         .then(res=>{
             dispatch({
                 type:"SIGNUP_SUCCESS",
                 createduser:res.data
             })
         })
         .catch(err=>{
             dispatch(GetError(err.response.data,err.response.status,'REGISTER_FAIL'))
             dispatch({
                 type:"SIGNUP_ERROR",
             })
         })
      };
}

export default signUpAction;
