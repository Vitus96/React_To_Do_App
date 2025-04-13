import React from "react";
import { Link } from "react-router-dom";


function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/project">To Do List</Link></li>
            </ul>
        </nav> 
    );
};


export default Navigation;