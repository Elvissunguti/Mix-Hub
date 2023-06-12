import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ error, setError ] = useState();

    const navigate = useNavigate();

    const handleInputChangeEmail = (e) => {
       setEmail(e.target.value);
    };

    const handleInputChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignin = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        };

        try{
            //
            const response = await fetch("http://localhost:3000/signIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            if(response.ok){
                // extract  the token from the response

                const data = await response.json();
                const token = data.token;
                // success user sugned up successfully
                navigate("/feed");
                console.log("User Signed up successfully");
            } else {
                console.error("Sign up failed");
                setError("Wrong Email or password")
            }

        } catch(error){
            console.error("Error", error)
        }
    };


    return (
        <section className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <div>
                        <img src={logo} alt="logo img" className="mx-auto h-20 w-auto" />
                        <h2 className="mt-6 text-center text-3xl font-bold traking-tight text-gray-900">
                            Login to your account
                            </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSignin}>
                        <div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email Address
                                </label>
                                <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Email Address"
                                required
                                onChange={handleInputChangeEmail}
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                                required
                                onChange={handleInputChangePassword}
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                 />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>{error}</p>
                            </div>
                            <div>
                                <button type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#40AA54] py-2 px-4 text-sm font-medium text-white hover:bg-[#40AA54]-700 focus:outline-none focus:ring-2 focus:ring-[#40AA54]-500 focus:ring-offset-2">
                                    Sign in
                                </button>
                               
                            </div>
                        </div>
                    </form>
                    <div className="flex items-center gap-2 flex-col">
                        <p>
                            Don't have an Account? <Link to="/Register">
                            <font className="text-red-500 hover:text-green-500">Register</font>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignIn;