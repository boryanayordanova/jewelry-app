import { Link  } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <Link to="/"><h1 className={styles.mainHeadline}>Jewelry Ideas <span>Exchange</span></h1></Link>
            Hello Boryana

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </header>
        
    )
}