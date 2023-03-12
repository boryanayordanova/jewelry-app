import { useState, useEffect } from "react";
import * as FirebaseFetchData from './FirebaseFetchData';
import { JewelryItem  } from "./JewelryItem";

export const JewelryList = () => {
    

    // useEffect(() => {
    //     FirebaseFetchData.getAll()
    //         // .then(setJewelry)
    //         .then(data => {
    //             console.log(data);
    //             setJewelry(Object.values(data));
    //         })
    //         .catch(err => {
    //             console.log('Error' + err);
    //         });
    // }, []);



    return (
        <>
        <h2>List here</h2>

        <div>
            <div>Name: <span>Red Bricelet</span></div>
            <div>Color: <span>Red</span></div>
        </div>

       
        
        </>
    )
}