import FirebaseConnection  from "./FirebaseConnection";
// const baseUrl = 'http://localhost:3005/api/users';
const baseUrl = 'https://jewelry-app-f122c-default-rtdb.europe-west1.firebasedatabase.app/jewelry.json'
console.log(baseUrl);

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    // console.log('res '+result);
    // console.log('res '+result[Object.keys(result)[0]]);
    // console.log(result => {
    //     console.log(Object.values(result))});
    return result;
};



// useEffect(() => {
//     fetch(`https://jewelry-app-f122c-default-rtdb.europe-west1.firebasedatabase.app/jewelry.json`)
//         .then(res => res.json())
//         .then(data => {
//             const result = Object.keys(data).map(name => ({ name, ...data[name] }));
//             console.log(result)
//             // setTodos(result);
//             // setIsLoading(false);
//         });
// }, []);

//     useEffect(() => {
//         FirebaseFetchData.getAll()
//             // .then(setJewelry)
//             .then(console.log("KK " + setJewelry))
//             // .then(setJewelry)
//             .catch(err => {
//                 console.log('Error' + err);
//             });
//     }, []);

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result.user;
};

export const create = async (userData) => {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = {
        country,
        city,
        street,
        streetNumber,
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result.user;
};

export const remove = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
};

export const update = async (userId, userData) => {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = {
        country,
        city,
        street,
        streetNumber,
    };

    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result.user;
};