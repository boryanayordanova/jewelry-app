import { Link, NavLink  } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header>
            <Link to="/"><h1 className={styles.mainHeadline}>Jewelry Ideas <span>Exchange</span></h1></Link>
            Hello Boryana

            <div className={styles["auth-buttons"]}>
                <div id="guest">
                    <NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/login">Login</NavLink>
                    |
                    <NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/register">Register</NavLink>                    
                </div>

                <div id="user">
                    <NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/">Logout</NavLink>
                    {/* |
                    <NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/register">Register</NavLink>                     */}

                </div>

            </div>

        </header>
        
    )
}