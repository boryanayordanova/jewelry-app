import JewelryList from "../JewelryList";
import { useState, useEffect } from "react";
import * as FirebaseFetchData from '../Services/FirebaseService';
import { useParams } from "react-router-dom";

export default function MainPages () {

    const [jewelry, setJewelry] = useState([]);

    const { userMail } = useParams();
    console.log("userMail");
    console.log(userMail);



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

    const dataList = async (d) => {
        console.log("data main");
        console.log(d);

        const newJewelry = await FirebaseFetchData.create(d);

        console.log("new je");
        console.log(newJewelry);

        {FirebaseFetchData.getAll()
            .then(data => {    
                const j = Object.keys(data).map(id => ({ ...data[id], id }));
                j.reverse();            
            setJewelry(j);            
        })
        .catch(err => {
            console.log('Error' + err);
        });}


    }

    const dataDeleteModal = async (d) => {
        console.log("dataDeleteModal");
        console.log(d);
        await FirebaseFetchData.remove(d);

        setJewelry(state => state.filter(x => x.id !== d));
    }

    const dataUpdate = async (jew, jid)  => {
        //e.preventDefault();
        console.log("data Edit....mAIN!!!!!!!!!!!!!!!!!!!!!!");
        console.log(jew);
        console.log(jid);

        // const data = Object.fromEntries(jew);

        //const updatedJewelry = await FirebaseFetchData.update(jid, jew);
        await FirebaseFetchData.update(jid, jew);
        //console.log(updatedJewelry);

        //firebase doesn't return full object with all params, so we need to get it by get requst.
        //setJewelry(state => state.map(x => x.id === jid ? updatedJewelry : x));
        

        {FirebaseFetchData.getAll()
            .then(data => {    
                const j = Object.keys(data).map(id => ({ ...data[id], id }));
                // console.log("j");
                // console.log(j);
                j.reverse();            
            setJewelry(j);            
        })
        .catch(err => {
            console.log('Error' + err);
        });}
                                        
    }  
    

    return (
        <article>
            {userMail ?
                <h1>Your Trinkets, {userMail}:</h1>
                : 
                <h1>Jewelries:</h1>
            }
            <JewelryList 
                jewelry={jewelry} 
                dataFromList={dataList} 
                onJewelryDelete={dataDeleteModal} 

                getDataUpdateJewelryForm={dataUpdate} 
                dataFromUpdate={dataUpdate}  
                jewelryOwner={userMail}              
            />
        </article>
    )

}