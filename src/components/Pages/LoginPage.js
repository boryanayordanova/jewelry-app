import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import profileImage from '../_images/profile.png' // relative path to image 
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "../hooks/useForm";
import { createContext } from "react";

import {auth} from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// const LoginFormKeys = {
//     Email: 'email',
//     Password: 'password'
// };


export const LoginPage = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    const onLoginSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("userCredential Login:");     
                console.log(auth.currentUser.accessToken);    
                console.log(auth.currentUser.uid);    
                console.log(email);
                console.log(password);
                navigate(`/my-jewelry/${email}`);                                             
            }).catch((error) => {
                console.log(error);
                // alert(error.message);
                setError(error.message);
                // switch(error.code) {
                //     case 'auth/invalid-email':
                //           alert('Invalid email!')                          
                //           break;
                //  }
                                
            });
    };


    
    return (
        <>
            <article>
            
            <div className={styles["article-auth"]} >
            
                    <img src={profileImage} alt="Profile"/>
                    <h1>Login:</h1>
                    <form className={styles["user-register-form"]} method="POST" onSubmit={onLoginSubmit}>
                        <div className={styles["form-group"]}>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="example@mail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                                
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                           
                        </div>

                        <div className={styles["form-actions"]}>
                            <button
                                id="action-save"
                                className="btn"
                                type="submit"
                            >                          
                                Login
                            </button>
                        </div>
                    </form>
                    
                    <div className={styles["reg-now"]}>You don't have a registration? - <Link to="/register"> Register Now</Link></div>

                    
                    {error &&
                        <p className="form-error" style={ { background: 'rgb(255 0 0 / 30%)', padding : 20,  'border-radius': 10, border: "1px solid red" }  }>
                            {error}
                        </p>
                    }
                </div>
            </article>
        </>
    );
};
