import { useState, useEffect } from "react";
import * as FirebaseFetchData from './FirebaseFetchData';
import JewelryItem from "./JewelryItem";
import { JewelryCreate } from "./JewelryCreate";
import styles from "./JewelryList.module.css";


export default function JewelryList ({
    jewelry,
    formValues,
    formChangeHandler,
    formErrors,
    formValidate,
    }) {

    const [showAddJewelry, setShowAddJewelry] = useState(false);
    


    const onJewelryAddClick = () => {
        setShowAddJewelry(true);
    };

    const onClose = () => {      
        setShowAddJewelry(false);
       
    };
    
    return (
        <>
        <h2>List here</h2>

        {showAddJewelry &&
                <JewelryCreate
                    onClose={onClose}
                    // onUserCreateSubmit={onUserCreateSubmitHandler}
                    formValues={formValues}
                    formChangeHandler={formChangeHandler}
                    formErrors={formErrors}
                    formValidate={formValidate}
                />
            }

        <button className={styles["btn-add-new"]} onClick={onJewelryAddClick}>Add New</button>

        <div className={styles["jewelry-items-container"]}>
            {jewelry.map(jew => (
                <JewelryItem key={jew.id} {...jew}/>                                 
            ))}        
        </div>


        
        </>
    )
}