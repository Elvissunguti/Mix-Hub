import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const NavBar = () => {
    return(
        <nav>
            <div>
                <Link>
                <img src={logo} alt="logo img" className="w-auto h-20" />
                </Link>
                <div>
                    <input type="search"  
                     name="search"
                     placeholder="Search" 
                     className=""
                     />
                </div>
            </div>
        </nav>
    )
}
export default NavBar;