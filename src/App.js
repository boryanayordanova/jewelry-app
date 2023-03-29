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



	// const contextValues = {

    // };

    return (
        // <AuthContext.Provider value={contextValues}>
		
            <div className="App">
                <Header />
                <Footer />
            </div>
        // </AuthContext.Provider>
		
    );
}

export default App;
