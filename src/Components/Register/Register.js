import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-18">
                <div>
                    <div>
                        <img src={logo} alt="logo img" className="mx-auto h-20 w-auto" />
                        <h2 className="mt-6 text-center text-gray-900 text-3xl font-bold tracking-tight">
                            Create an Account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    UserName
                                </label>
                                <input
                                 id="username"
                                 name="email"
                                type="username"
                                autoComplete="name"
                                placeholder="Username"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email Address
                                </label>
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete=""
                                placeholder="Email Address"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                id="password"
                                type="password"
                                name="email"
                                placeholder="Password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                             className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#40AA54] py-2 px-4 text-sm font-medium text-white hover:bg-[#40AA54]-700 focus:outline-none focus:ring-2 focus:ring-[#40AA54]-500 focus:ring-offset-2">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center flex-col gap-2">
                        <Link to="/sign in">
                        Got an account? <span className="text-red-500 hover:text-green-500">Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Register;