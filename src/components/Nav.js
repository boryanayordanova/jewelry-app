import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage  from "./Pages/AboutPage";
import styles from "./Nav.module.css";

export default function Nav(){
    return (
        <>
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">All Jewelries</Link></li>
                <li><Link to="/">Top Likes</Link></li>
                <li><Link to="/">Еarrings</Link></li>
                <li><Link to="/">Bracelets</Link></li>
                <li><Link to="/">Necklaces</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li> */}
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<HomePage />} />;
            {/* <Route path="/" element={<h2>Home P</h2>} />; */}
            <Route path="/about" element={<AboutPage />} />;
            {/* <Route path="/about" element={<h2>About P</h2>} />; */}
            <Route path="/*" element={<h1>Page Not Found - Error 404</h1>} />;
        </Routes>
        </>
    )
}