import { useState } from "react";

import { JewelryCreate } from "./JewelryCreate";
import JewelryItem from "./JewelryItem";
import styles from "./JewelryList.module.scss";
import { JewelryDelete } from "./JewelryDelete"
import { useLocation } from 'react-router-dom';
import JewelryItemLoggedUser from "./JewelryItemLoggedUser";
import * as FirebaseFetchData from './Services/FirebaseService';
import { useParams } from "react-router-dom";

export default function JewelryList ({
    jewelry,
    dataFromList,
    onJewelryDelete,
    dataFromUpdate,
    jewelryOwner,
    //getDataUpdateJewelryForm,
    }) {

    const [showAddJewelry, setShowAddJewelry] = useState(false);
    const [showDeleteJewelry, setShowDeleteJewelry] = useState(null);
    const [showEditJewelry, setShowEditJewelry] = useState(null);


    let location = useLocation();

    // const { userMail } = useParams();
    // console.log("userMail List");
    // console.log(userMail);


    //Add
    
    const onJewelryAddClick = () => {
        setShowAddJewelry(true);
    };

    const onCloseFormHandler = () => {      
        setShowAddJewelry(false);
        setShowEditJewelry(false);
    };

    const getDataCreatedJewelryForm = (data) => {
        console.log("getDataCreatedJewelryForm:");
        // console.log(data);
        dataFromList(data); 
        
        // console.log("Own");
        // console.log(jewelryOwner);
        setShowAddJewelry(false);
        console.log("getDataCreatedJewelryForm____________ennd");
    }

    // Delete

    const onDeleteClickHandler = (id) => {
        // console.log(id)
        setShowDeleteJewelry(id);  
   };

    const onCloseModalHandler = () => {
        setShowDeleteJewelry(false);
    }

   const onDeleteModalHandler = () => {
        // console.log("deleting active");
        onJewelryDelete(showDeleteJewelry);
        setShowDeleteJewelry(false);
    };


    // Edit

    const onEditHandler = async (id) => {
        console.log("Edit Clicked ...");
        console.log(id);

        const jewData = await FirebaseFetchData.getOne(id);
        
        const combine = {jewData, id};
        console.log(combine);
        setShowEditJewelry(combine);

        //console.log(jew);
    
 
        
        console.log("Edit Clicked ..!end");
        console.log("_____________");
        //return id;


    }

  

    const getDataUpdateJewelryForm = (data, myid) => {
        console.log("getDataUpdatedJewelryForm:");
        console.log(data);
        // console.log(id);
        //dataFromList(data);
        // let i = onEditHandler(id);
        dataFromUpdate(data, myid);
        //setShowAddJewelry(false);
        setShowEditJewelry(false);
        console.log("getDataUpdatedJewelryForm:________end");
    }




      
        return (
            <>
    
            {showAddJewelry &&
                <JewelryCreate
                    onCloseForm={onCloseFormHandler}
                    dataCreatedJewelryForm={getDataCreatedJewelryForm}
                    //getClickId={onEditHandler}

                        // formChangeHandler={formChangeHandler}
                        // formErrors={formErrors}
                        // formValidate={formValidate}
                />
            }

            {showDeleteJewelry &&
                <JewelryDelete 
                    onCloseModal={onCloseModalHandler}
                    onDeleteModal={onDeleteModalHandler}
                />
            }

            {showEditJewelry &&
                <JewelryCreate
                    jewelry={showEditJewelry}
                    onCloseForm={onCloseFormHandler}
                    dataCreatedJewelryForm={getDataUpdateJewelryForm}
                    //getEditClickID={onEditHandler}
                    // dataUpdatedJewelryForm={getDataUpdateJewelryForm}
         
                />
            }
    

            {jewelryOwner && 
                <button className={styles["btn-add-new"]} onClick={onJewelryAddClick}>Add New</button>               
            }


    
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


                {jewelry.filter(valMine => (valMine.owner === jewelryOwner && location.pathname.includes('/my-jewelry/'))).map(jew => (                       
                        <JewelryItemLoggedUser key={jew.id} {...jew}  onDeleteClick={onDeleteClickHandler} onEditClick={onEditHandler}/>
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