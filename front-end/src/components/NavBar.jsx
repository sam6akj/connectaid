import React from "react";
import './NavBar.css';


const navBar = ()=>{
    return (
        <nav className="navbar bg-gray-600 text-white p-4">
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>
    );
}

export default navBar;