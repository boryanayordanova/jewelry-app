import { useState } from "react";

import { JewelryCreate } from "./JewelryCreate";
import styles from "./JewelryList.module.css";

import JewelryItem from "./JewelryItem";
import { useLocation } from 'react-router-dom';

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

    let location = useLocation();
    // console.log(location.pathname);
 
      
        return (
            <>
            {/* <h2>Jewelries List:</h2> */}
    
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

                {jewelry.filter(valEar => (valEar.category === 'earrings' && location.pathname==='/earrings')).map(jew => (                   
                       <JewelryItem key={jew.id} {...jew} />                            
                        )
                    )                                           
                }  

                {jewelry.filter(valNeck => (valNeck.category === 'necklace' && location.pathname==='/necklaces')).map(jew => (                                                 
                        <JewelryItem key={jew.id} {...jew} />     
                        )
                    )                                           
                }  

                {jewelry.filter(valBra => (valBra.category === 'bracelet' && location.pathname==='/bracelets')).map(jew => (                                                 
                        <JewelryItem key={jew.id} {...jew} />     
                        )
                    )                                           
                }    


                {jewelry.filter(valAll => location.pathname==='/').map(jew => (                                                 
                        <JewelryItem key={jew.id} {...jew} />     
                        )
                    )                                           
                }     
                   
            </div>
    
            </>
        )

    

}