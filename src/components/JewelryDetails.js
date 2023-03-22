import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./JewelryDetails.module.scss";
import * as FirebaseFetchData from './Services/FirebaseService';
import { useNavigate } from "react-router-dom";

export const JewelryDetails = ({
     
}) => {

    const { jewelryId } = useParams();
    console.log("Param Id");
    console.log(jewelryId);

    const navigate = useNavigate();

    const [jewelryDetails, setJewelryDetails ] = useState({});

    useEffect(() => {
        FirebaseFetchData.getOne(jewelryId)
        .then(result => {

            console.log("Res:");
            console.log(result);
            setJewelryDetails(result);
        }) 
    }, [jewelryId])



    return (
        <>
        <article>
            <div className={styles['jewelry-details']} >
            <div className={styles["overlay"]}>
                {/* <div className={styles["backdrop"]}></div> */}
                    <div className={styles['jewelry-details-container']} >
                        
                    <button className={styles["btn-close"]} onClick={() => navigate(-1)} type="button">X</button>

                        <div className={styles["jewelry-details-img"]}><img src={jewelryDetails.image} alt={jewelryDetails.name}/></div>
                        <div className={styles["jewelry-details-data"]}>
                            <h1>Details:</h1>
                            <div>Name:<h2>{jewelryDetails.name}</h2></div>
                            <div>Category:<h2>{jewelryDetails.category}</h2></div>
                            <div>Color:<h2>{jewelryDetails.color}</h2></div>
                            <div>Description:<h2>{jewelryDetails.description}</h2></div>
                        </div>
                       
                    
                    </div>
                </div>
            </div>
        </article>

        </>

    );
}