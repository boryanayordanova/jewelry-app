import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../components/JewelryDelete.module.scss";
import * as FirebaseFetchData from './Services/FirebaseService';

export const JewelryDelete = ({
    onCloseModal,
    onDeleteModal
}) => {


    return (
        <div className={styles['jewelry-delete']} >
        <div className={styles["overlay"]}>
            <div className={styles["backdrop"]}></div>
            <div className={styles["jewelry-delete-container"]}>
               
                    <header>
                        <h2>Are you sure you want to delete this Jewelry?</h2>
                        <button className={styles["btn-close"]} onClick={onCloseModal}>X</button>
                    </header>

                    <div className={styles["actions"]}>      
                        <button id="action-save" type="button" onClick={onDeleteModal}>Delete</button>
                        <button id="action-cancel"  type="button" onClick={onCloseModal}>Cancel</button>
                    </div>
               
            </div>
        </div>
        </div>
    );
};