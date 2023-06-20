import React from "react";
import spotify_logo from "../Assets/spotify_logo_white.svg";
import IconText from "../shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../shared/TextWithHover";
import { useState } from "react";
import TextInput from "../shared/TextInput";
import CloudinaryUpload from "./CloudinaryUpload";
import { useNavigate } from "react-router-dom";


const UploadSong = () => {

    const [ name, setName ] = useState("");
    const [ thumbnail, setThumbnail ] = useState("");
    const [ uploadedSongFileName, setUploadedSongFileName ] = useState();
    const [ playlistUrl, setPlaylistUrl ] = useState("");

    const navigate = useNavigate();

    const submitSong = async () => {

        const getToken = () => {
            const accessToken = document.cookie.replace(
                /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
                "$1"
            );
            return accessToken;
        };
        const token = getToken();
        
        const body = {
            name: name,
            thumbnail: thumbnail,
            track: playlistUrl
        };
    
        const response = await fetch("http://localhost:3000/song/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });
    
        const formattedResponse = await response.json();
    
        if (formattedResponse.err) {
            alert("Could not create song");
            return;
        }
    
        alert("Success");
        navigate("/home");
    };
    


    return (
        <div className="h-full w-full flex">
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    <div className="logoDiv p-6">
                        <img
                        src={spotify_logo}
                        alt=""
                        width={125}
                        />
                    </div>
                    <div className="py-5">
                        <IconText
                        iconName={"material-symbols:home"}
                        displayText={"Home"}
                        />
                        <IconText
                        iconName={"material-symbols:search-rounded"}
                        displayText={"Search"}
                        />
                        <IconText
                        iconName={"icomoon-free:books"}
                        displayText={"Library"}
                        />
                        <IconText
                        iconName={"material-symbols:library-music-sharp"}
                        displayText={"My Music"}
                        />
                    </div>
                    <div className="pt-5">
                        <IconText
                        iconName={"material-symbols:add-box"}
                        displayText={"Create playlist"}
                        />
                        <IconText
                        iconName={"mdi:cards-heart"}
                        displayText={"Liked Songs"}
                        />
                    </div>
                </div>
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 py-1 px-2 flex rounded-full items-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="carbon:earth-europe-africa" />
                        <div className="ml-2 text-sm font-semibold">
                            English
                        </div>
                    </div>
                </div>
            </div>
            {/* Main content */}
            <div className="h-full w-4/5 bg-app-black overflow-auto">
                <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-2/3 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            <div className="h-1/2 border-r border-white"></div>
                        </div>
                        <div className="w-1/3 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Upload Song"} />
                            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                AC
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <div className="text-white font-semibold mb-5 text-2xl mt-8">
                        Upload Your Music
                    </div>
                </div>
                <div className="w-2/3 flex space-x-3">
                    <div className="w-1/2 ">
                        <TextInput
                        label="Name"
                        labelClassName={"text-white"}
                        placeholder="Name"
                        value={name}
                        setValue={setName}
                        />
                        </div>
                        <div className="w-1/2">
                            <TextInput
                            label="Thumbnail"
                            labelClassName={"text-white"}
                            placeholder="Thumbnail"
                            value={thumbnail}
                            setValue={setThumbnail}
                            />
                        </div>
                </div>
                <div className="py-5">
                    {uploadedSongFileName ? (
                        <div className="bg-white rounded-full p-3 w-1/3">
                            {uploadedSongFileName.subString(0, 35)}...
                        </div>
                    ) : (
                        <CloudinaryUpload 
                        setUrl={setPlaylistUrl}
                        setName={setUploadedSongFileName}
                        />
                    )}

                </div>
                <div className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
                 onClick={submitSong}>
                    Submit song
                </div>
            </div>
        </div>
    )

}
export default UploadSong;