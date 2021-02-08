import axios from "axios";
import GetError from './errorAction'

const ManufacturerAction = (payload) => {

    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    return (dispatch) => {
        axios
            .get('/findme/api/manufacturers',config)
            .then((res) => {
                dispatch({
                    type: "MANUFACTURERS_GET",
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch(GetError(err.response.data,err.response.status,'MANUFACTURER_ERROR'))
                dispatch({
                    type: "MANUFACTURERS_GET_ERR",
                  
                });
            });
    };
};

export default ManufacturerAction