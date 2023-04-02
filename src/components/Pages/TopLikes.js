import JewelryItem from "../JewelryItem";
import { useState } from "react";
import { useEffect } from "react";
import * as FirebaseFetchData from '../Services/FirebaseService';
import styles from "./TopLikes.module.scss";


export const TopLikes = () => {

    const [jewelry, setJewelry] = useState([]);
    
    const size = 4;

    useEffect(() => {
        FirebaseFetchData.getAll()            
            .then(data => {                
                const j = Object.keys(data).map(id => ({ id, ...data[id] }))
                j.reverse();
                setJewelry(j);            
            })
            .catch(err => {
                console.log('Error' + err);
            });
    }, []);
  

    jewelry.sort(function(a, b) {
        return parseFloat(b.countLikes) - parseFloat(a.countLikes);
    });
   

    return (
        <article>
        <h1>Top {size} Likes:</h1>

            <div className={styles["jewelry-items-container"]}>

                {jewelry.slice(0, size).map(jew => (                                                 
                        <JewelryItem key={jew.id} {...jew} />     
                        )
                    )                                           
                } 

            </div> 
     
    </article>
    )
}