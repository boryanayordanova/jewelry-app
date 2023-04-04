const request = async (method, url, data) => {
    
    const options = {};
    
    if(method !== 'GET'){
        options.method = method;

        if(data) {
            options.headers = {
                'content-type': 'application/json',
                
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
                "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control"
            };

            options.body = JSON.stringify(data);

        }
    }

    // if (token) {
    //     options.headers = {
    //         ...options.headers,
    //         'X-Authorization': token,
    //     };
    // }

    const response = await fetch(url, options);

    try {
        const result = await response.json();
        return result;
    }catch (error) {
        return {};
    }
}


export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');