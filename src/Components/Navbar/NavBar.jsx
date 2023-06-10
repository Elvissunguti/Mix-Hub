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
        <nav className="bg-[#808080]">
            <div className="mx-auto flex justify-center items-center max-w-4xl max-w-6xl">
                <Link>
                <img src={logo} alt="logo img" className="w-auto h-20 bg-[#808080]" />
                </Link>
                <div className="flex flex-row items-center space-x-16">
                <input type="search"  
                     name="search"
                     placeholder="Search" 
                     className=""
                     />
                     <div className="flex flex-row items-center space-x-16">
                        <ul className="items-center flex  flex-row md-flex space-x-8">    
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
                                    className="hover:bg-black"
                                    >
                                        {navLink.name}
                                    </Link>
                                </li>
                            ))}

                            <div className="flex flex-row space-x-4">
                            <li>
                                <Link
                                 className="flex justify-center py-1 px-2 border border-white-100"
                                 to="/sign in">
                                Sign in 
                                </Link>
                            </li>
                            <li>
                                <Link
                                className="flex justify-center bg-orange-500 text-white"
                                to="/Register">
                                Create account
                                </Link>
                            </li>
                            </div>

                        </ul>
                     </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;