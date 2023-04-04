import { Link, NavLink, Routes, Route } from "react-router-dom";
import MainPages from "./Pages/MainPages";
import AboutPage from "./Pages/AboutPage";
import { JewelryDetails } from "./JewelryDetails";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { TopLikes } from "./Pages/TopLikes";


import { AuthContext } from "./contexts/AuthContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import styles from "./Header.module.scss";

export default function Header() {

    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out succesful");
                navigate("/")
            })
            .catch((error) => console.log(error));
    };

    
    // const contextValues = {
    //     // userId: auth.authUser.id,
    //     // token: auth.authUser.accessToken,
    //     // userEmail: authUser.email,
        
    //     // isAuthenticated: !!auth.authUser.accessToken,
    // }



    let contextMail = "";

   {{authUser ?
        // <h1>{authUser.email}</h1>
        contextMail = authUser.email           
        :
        // <h1>Loading...</h1>
        <></>
    }
}

    return (
        <>
        <header>
            <Link to="/">
                <h1 className={styles.mainHeadline}>
                    Jewelry Ideas <span>Exchange</span>
                </h1>
            </Link>

            {/* <AuthDetails /> */}

            {authUser ? (
                <>   
                    <div className={styles["auth-buttons"]}>
                        Hello,<p className={styles["hello"]}> {authUser.email}</p>
                        <button onClick={userSignOut}>Sign Out</button>                     
                    </div>
                </>
            ) : (
                //  <p>Signed Out</p>
                <div className={styles["auth-buttons"]}>
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? "deepskyblue" : "white",
                        })}
                        to="/login"
                    >
                        Login
                    </NavLink>
                    |
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? "deepskyblue" : "white",
                        })}
                        to="/register"
                    >
                        Register
                    </NavLink>
                </div>
            )}


        </header>
        
        <nav className={styles.nav}>
        <ul>
            {authUser ? (                            
                <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to={`/my-jewelry/${authUser.email}`}>My Trinkets</NavLink></li>                                                 
            ) : 
            <>
            </>
            }

            <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/">All Jewelries</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/top-likes">Top Liked</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/earrings">Еarrings</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/bracelets">Bracelets</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/necklaces">Necklaces</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/about">About</NavLink></li>

        </ul>
    </nav>

    {/* {authUser ?
        // <h1>{authUser.email}</h1>
        contextMail = authUser.email           
        :
        // <h1>Loading...</h1>
        <></>
} */}


    <AuthContext.Provider value={contextMail}>
    <Routes>
        <Route path="/" element={<MainPages />} />;
        <Route path="/login" element={<LoginPage />} />;
        <Route path="/register" element={<RegisterPage />} />;
        {/* <Route path="/my-jewelry" element={<MainPages />} />; */}
        <Route path="/my-jewelry/:userMail" element={<MainPages />} />;
        <Route path="/top-likes" element={<TopLikes />}/>;
        <Route path="/earrings" element={<MainPages />} />;
        <Route path="/bracelets" element={<MainPages />} />;
        <Route path="/necklaces" element={<MainPages />} />;
        <Route path="/about" element={<AboutPage />} />;
        <Route path="/:jewelryId" element={<JewelryDetails />} />;
        <Route path="/*" element={<h1>Page Not Found - Error 404</h1>} />;
    </Routes>
    </AuthContext.Provider>
    </>
    );
}
