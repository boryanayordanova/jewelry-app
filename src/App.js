import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthContext } from "./components/contexts/AuthContext";
import { useState } from "react";
import { useContext } from "react";

import {auth} from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth"


function App() {
    const [auth, setAuth] = useState({});

	// const onLoginSubmit = async (e, data) => {
	// 	e.preventDefault();
    // 	console.log("login");
	// 	// e.preventDefault();
    // 	//console.log(Object.fromEntries(new FormData(e.target)));
    //     console.log(data);
	// 	signInWithEmailAndPassword(data)
	// 	.then((userCredential) => {
	// 		console.log("userCredential");
	// 		console.log(userCredential);
	// 	});
    // } 

	const data = useContext(AuthContext);

    return (
        <AuthContext.Provider value={{data}}>
		
            <div className="App">
                <Header />
                <Footer />
            </div>
        </AuthContext.Provider>
		
    );
}

export default App;
