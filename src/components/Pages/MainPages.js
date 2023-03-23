import JewelryList from "../JewelryList";
import { useState, useEffect } from "react";
import * as FirebaseFetchData from '../Services/FirebaseService';


export default function MainPages () {

    const [jewelry, setJewelry] = useState([]);

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

    const data = async (d) => {
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

    // const onUserDelete = async (userId) => {
    //     // Delete from server
      

    //     // Delete from state
    //     setUsers(state => state.filter(x => x._id !== userId));
    // };


    return (
        <article>
            <h1>Jewelries List:</h1>
            <JewelryList jewelry={jewelry} dataFromList={data} onJewelryDelete={dataDeleteModal}/>
        </article>
    )



}