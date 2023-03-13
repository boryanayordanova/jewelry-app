import JewelryList from "../JewelryList";
import { useState, useEffect } from "react";
import * as FirebaseFetchData from '../FirebaseFetchData';

export default function HomePage () {

    const [jewelry, setJewelry] = useState([]);

    useEffect(() => {
        FirebaseFetchData.getAll()            
            .then(data => {                
                //setJewelry(Object.values(data));
                setJewelry(Object.keys(data).map(id => ({ id, ...data[id] })));            
            })
            .catch(err => {
                console.log('Error' + err);
            });
    }, []);


    // useEffect(() => {
    //     fetch(`http://localhost:3000/todos.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const result = Object.keys(data).map(id => ({ id, ...data[id] }));
    //             setTodos(result);
    //             setIsLoading(false);
    //         });
    // }, []);

    return (
        <article>
            <h1>Home p</h1>            
            <JewelryList jewelry={jewelry}/>
        </article>
    )
}