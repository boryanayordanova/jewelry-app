import * as request from "./Requester";
// const baseUrl = 'http://localhost:3005/api/users';
const baseUrl = 'https://jewelry-app-f122c-default-rtdb.europe-west1.firebasedatabase.app/jewelry.json'
console.log(baseUrl);

export const getAll = async () => {

    // const result = await request('GET', baseUrl);
    const result = await request.get(baseUrl);
   
    console.log(result);
    return result;
    
    // const response = await fetch(baseUrl);
    // const result = await response.json();
    // return result;
};


export const create = async (jewelryData) => {

    const result = await request.post(baseUrl, jewelryData);

    console.log(result);

    return result;


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

// export const remove = async (userId) => {
//     const response = await fetch(`${baseUrl}/${userId}`, {
//         method: 'DELETE'
//     });

//     const result = await response.json();

//     return result;
// };

// export const update = async (userId, userData) => {
//     const { country, city, street, streetNumber, ...data } = userData;
//     data.address = {
//         country,
//         city,
//         street,
//         streetNumber,
//     };

//     const response = await fetch(`${baseUrl}/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     });

//     const result = await response.json();

//     return result.user;
// };