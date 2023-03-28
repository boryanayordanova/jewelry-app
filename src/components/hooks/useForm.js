import { useState } from 'react';

import {auth} from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);
        console.log(values);
        signInWithEmailAndPassword(values)
            .then((userCredential) => {
                console.log("userCredential");
                console.log(userCredential);
            });
    };

    // const changeValues = (newValues) => {
    //     // TODO: Validate newValues shape (like initialValues)
        
    //     setValues(newValues);
    // };

    return {
        values,
        changeHandler,
        onSubmit,
        // changeValues,
    };
};