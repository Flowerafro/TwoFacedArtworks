import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Nav() {

const location = useLocation();
const [activePath, setActivePath] = useState(location.pathname);

useEffect(() => {
    setActivePath(location.pathname)
}, [location.pathname]);
   


    return (
        <>
        <nav>
            <ul>
                <Link to="/" className={activePath === "/" ? "active" : ""}>ArtWork</Link>
                <Link to="/Clients" className={activePath === "/Clients" ? "active" : ""}>ClientWork</Link>
                <Link to="/About" className={activePath === "/About" ? "active" : ""}>About</Link>
            </ul>
        </nav>
        </>
        
    )
}