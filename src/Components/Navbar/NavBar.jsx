import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const NavBar = () => {

    const navLinks= [
        {name: "Home"},
        {name: "Feed"},
        {name: "Library"}
    ];

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
                     <div>
                        <ul>
                            {navLinks.map((navLink, i) => (
                                <li className=""
                                 key={i}>
                                    <Link to={
                                        navLink.name === "Home" 
                                        ? `/`
                                        : `${
                                            navLink.name.charAt(0).toLowerCase() +
                                            navLink.name.slice(1)

                                          }`
                                    }
                                    >
                                        {navLink.name}
                                    </Link>
                                </li>
                            ))}

                            <>
                            <li>
                                <Link
                                 className=""
                                 to="/sign in">
                                Sign in 
                                </Link>
                            </li>
                            <li>
                                <Link
                                className=""
                                to="/Register">
                                Create account
                                </Link>
                            </li>
                            </>

                        </ul>
                     </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;