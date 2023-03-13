import { useState, useEffect } from "react";
import * as FirebaseFetchData from './FirebaseFetchData';
import JewelryItem from "./JewelryItem";
import styles from "./JewelryList.module.css";


export default function JewelryList ({jewelry}) {
    
    return (
        <>
        <h2>List here</h2>

        <button>Add New</button>

        <div className={styles["jewelry-items-container"]}>
            {jewelry.map(jew => (
                <JewelryItem key={jew.id} {...jew}/>                                 
            ))}        
        </div>


        
        </>
    )
}