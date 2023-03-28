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


export const LoginPage = ({loginMeilVal}) => {

    const navigate = useNavigate();



    // const [values, setValues] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const onLoginSubmit = (e) => {
        e.preventDefault();
        //onSubmitHandler(values);
        //console.log(values);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("userCredential Login:");
                console.log(userCredential);
                console.log(auth);
                console.log(email);
                console.log(password);
                navigate('/my-jewelry')
                const AuthContext = createContext({ email });
                loginMeilVal(email);
            }).catch((error) => {
                console.log(error);
                                
            });
        };

    return (
        <>
            <article>
                <div className={styles["article-auth"]}>
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
                            {/* {formErrors.color &&
                            <p className="form-error">
                                {formErrors.color}
                            </p>
                        } */}
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
                            {/* {formErrors.color &&
                        <p className="form-error">
                            {formErrors.color}
                        </p>
                    } */}
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
                    
                    <div className={styles["reg-now"]}>You don't have a registration? <Link to="/register"> Register Now</Link></div>

                    
                
                </div>
            </article>
        </>
    );
};
