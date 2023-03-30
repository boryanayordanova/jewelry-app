import styles from "./RegisterPage.module.scss";
import profileImage from '../_images/profile.png' // relative path to image 

import {auth} from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



export const RegisterPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();


    const onRegisterSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("userCredential Reg");
                console.log(auth.currentUser.accessToken);
                console.log(email);
                console.log(password);
                navigate(`/my-jewelry/${email}`);
            }).catch((error) => {
                console.log(error);
                setError(error.message);

            });
        };


    return (
        <>
            <article>
                <div className={styles["article-auth"]}>
                    <img src={profileImage} alt="Profile"/>
                    <h1>Register:</h1>
                    <form className={styles["user-register-form"]} method="POST" onSubmit={onRegisterSubmit}>

                        <div className={styles["form-group"]}>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter User Email..."
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

                                Register
                            </button>
                        </div>
                    </form>

                    <div className={styles["login-now"]}>You already have a registration? - <Link to="/login"> Login Now</Link></div>

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
