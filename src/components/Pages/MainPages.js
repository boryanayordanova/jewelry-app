import JewelryList from "../JewelryList";
import { useState, useEffect } from "react";
import * as FirebaseFetchData from '../FirebaseFetchData';

export default function MainPages () {

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


    return (
        <article>
            <h1>Jewelries List:</h1>
            <JewelryList jewelry={jewelry}/>
        </article>
    )



}