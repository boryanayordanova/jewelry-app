import { Routes, Route, NavLink } from "react-router-dom";

import MainPages from "./Pages/MainPages";
import AboutPage from "./Pages/AboutPage";
import styles from "./Nav.module.scss";
import { JewelryDetails } from "./JewelryDetails";

import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";

export default function Nav () {
    return (
        <>
        <nav className={styles.nav}>
            <ul>
                <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/my-jewelry">My Trinkets</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/">All Jewelries</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/top-likes">Top Liked</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/earrings">Еarrings</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/bracelets">Bracelets</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/necklaces">Necklaces</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? "deepskyblue" : "white"})} to="/about">About</NavLink></li>
                {/* <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li> */}
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<MainPages />} />;
            <Route path="/login" element={<LoginPage />} />;
            <Route path="/register" element={<RegisterPage />} />;
            <Route path="/my-jewelry" element={<MainPages />} />;
            <Route path="/top-likes" element={<h1>Top Likes</h1>} />;
            <Route path="/earrings" element={<MainPages />} />;
            <Route path="/bracelets" element={<MainPages />} />;
            <Route path="/necklaces" element={<MainPages />} />;
            <Route path="/about" element={<AboutPage />} />;
            <Route path="/:jewelryId" element={<JewelryDetails />} />;
            <Route path="/*" element={<h1>Page Not Found - Error 404</h1>} />;
        </Routes>
        </>
    )
}