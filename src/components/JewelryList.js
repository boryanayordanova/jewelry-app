import { useState } from "react";

import { JewelryCreate } from "./JewelryCreate";
import JewelryItem from "./JewelryItem";
import styles from "./JewelryList.module.scss";

import { useLocation } from 'react-router-dom';
import JewelryItemLoggedUser from "./JewelryItemLoggedUser";

export default function JewelryList ({
    jewelry,
    dataFromList

    }) {

    const [showAddJewelry, setShowAddJewelry] = useState(false);
    let location = useLocation();
    
    const onJewelryAddClick = () => {
        setShowAddJewelry(true);
    };

    const onCloseFormHandler = () => {      
        setShowAddJewelry(false);
    };


    const getDataCreatedJewelryForm = (data) => {
        console.log("List data:");
        console.log(data);
        dataFromList(data);
        setShowAddJewelry(false)
    }
 
      
        return (
            <>
            {/* <h2>Jewelries List:</h2> */}
    
            {showAddJewelry &&
                    <JewelryCreate
                        onCloseForm={onCloseFormHandler}                       
                        // onSubmitCreateJewelryForm={onSubmitCreateJewelryHandler}
                        dataCreatedJewelryForm={getDataCreatedJewelryForm}

                        // formChangeHandler={formChangeHandler}
                        // formErrors={formErrors}
                        // formValidate={formValidate}
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

                {jewelry.filter(valLoggedUser => location.pathname==='/my-jewelry').map(jew => (                                                 
                        <JewelryItemLoggedUser key={jew.id} {...jew} />     
                        )
                        
                    )                                           
                } 

                {jewelry.lenght === 0 && (
                    <h3>None Jewelry yet</h3>
                )}
                   
            </div>
    
            </>
        )

    

}