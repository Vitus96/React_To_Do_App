import React from "react";
import { Link } from "react-router-dom";


function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">About me and my project</Link></li>
                <li><Link to="/about"></Link>React To Do List Application</li>
                
            </ul>
        </nav> 
    );
};


export default Navigation;