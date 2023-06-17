import React from "react";
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return(
       <footer className=" bg-black text-white footer">
        <div className="flex flex-col justify-between py-5 px-2 mx-auto max-w-4xl md:flex-row xl:max-w-6xl xl:px-0">
            <div className="flex flex-col space-y-2">
                <h2 className="font-bold text-xl ">Company</h2>
                    <p>About</p>
                    <p>Jobs</p>
                    <p>For the Record</p>
            </div>

            <div className="flex flex-col space-y-2 ">
                <h2 className="font-bold text-xl">Communities</h2>
                <p>For Artists</p>
                <p>Developers</p>
                <p>Advertising</p>
                <p>Investors</p>
                <p>Vendors</p>
                <p>Spotify For Work</p>
            </div>

            <div className="flex flex-col space-y-2">
                <h2 className="font-bold text-xl">Useful Links</h2>
                <p>Support</p>
                <p>Free Mobile App</p>
            </div>
            <div className="flex flex-row font-bold text-3xl gap-2 hover:green-200">
                <CiInstagram className="bg-[#1A1110] border rounded-full " />
                <CiTwitter className="bg-gray-300 border rounded-full" />
                <CiFacebook className="bg-gray-300 border rounded-full" />

            </div>
            

        </div>
       </footer>
    )
}
export default Footer;