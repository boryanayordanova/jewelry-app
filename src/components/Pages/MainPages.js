import JewelryList from "../JewelryList";
import { useState, useEffect } from "react";
import * as FirebaseFetchData from '../Services/FirebaseService';


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

    const data = async (d) => {
        console.log("data main");
        console.log(d);

        const newJewelry = await FirebaseFetchData.create(d);

        console.log("new je");
        console.log(newJewelry);

        return newJewelry;
        //add to state
    }


    return (
        <article>
            <h1>Jewelries List:</h1>
            <JewelryList jewelry={jewelry} dataFromList={data}/>
        </article>
    )



}