import * as request from "./Requester";
// const baseUrl = 'http://localhost:3005/api/users';
import { useNavigate } from "react-router-dom";
import {auth} from "../../firebase"
import { signOut } from "firebase/auth";
const baseUrl = 'https://jewelry-app-f122c-default-rtdb.europe-west1.firebasedatabase.app/jewelry';
console.log(process.env.NODE_ENV); //development

export const getAll = async () => {    

    // const result = await request('GET', baseUrl);

    const result = await request.get(baseUrl.concat(".json"));
   
    console.log(result);
   

    if(result.error === "Permission denied"){      
        signOut(auth)
            .then(() => {
                console.log("sign out succesful");
                const navigate = useNavigate();
                navigate("/")
            })
            .catch((error) => console.log(error));
            return;
    }else {
        return result;

    }
    
    // const response = await fetch(baseUrl);
    // const result = await response.json();
    // return result;


};



export const create = async (jewelryData) => {

    console.log('FireBase data to post:')

    console.log(jewelryData)

    const result = await request.post(baseUrl.concat(".json"), jewelryData);

    console.log('FireBase posted data:')

    console.log(result);

    return jewelryData;


    // const response = await fetch(baseUrl, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    //     body: JSON.stringify(jewelryData)
    // });

    // const result = await response;
    // console.log("fetcher");
    // console.log(result);

  
};


export const getOne = async (jewelryId) => {

    const result = await request.get(`${baseUrl}/${jewelryId}`.concat(".json"));

    // console.log(result);
    return result;

}


export const remove = async (jewelryId) => {

    const result = await request.del(`${baseUrl}/${jewelryId}`.concat(".json"));

    console.log(result);
    return result;

}

export const update = async (jewelryId, jewelryData) => {
 
    // console.log("dannii")
    // console.log(jewelryId)
    // console.log(jewelryData)
    
    const result = await request.patch(`${baseUrl}/${jewelryId}`.concat(".json"), jewelryData);

    // console.log("result");
    // console.log(result);
    return result;
};


export const like = async (jewelryId, userMail) => {
 
    // console.log("dannii")
    // console.log(jewelryId)
    // console.log(jewelryData)
    
    const result = await request.patch(`${baseUrl}/${jewelryId}`.concat(".json"), userMail);

    // console.log("result");
    // console.log(result);
    return result;
};