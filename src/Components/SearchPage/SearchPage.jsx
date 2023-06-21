import React from "react";
import LoggedInContainer from "../Containers/LoggedInContainer";
import { Icon } from "@iconify/react";
import { useState } from "react";
import SingleSongCard from "../shared/SingleSongCard";

const Search = () => {

    const [ isInputFocused, setIsInputFocused ] = useState(false);
    const [ searchText, setSearchText ] = useState("");
    const [ songData, setSongData ] = useState([]);
    

    const searchSong = async () => {
        const getToken = () => {
            const accessToken = document.cookie.replace(
                /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
                "$1"
            );
            return accessToken;
        };
        const token = getToken();
      
        const response = await fetch("http://localhost:3000/get/songname/" + searchText, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      
        const formattedResponse = await response.json();
        setSongData(formattedResponse.data);
      };
    

    return(
       <LoggedInContainer curActiveScreen="search">
        <div className="w-full py-6">
            <div className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-3 items-center ${
                isInputFocused ? "border border-white" : ""
            }`}
            >
                <Icon icon="ic:outline-search" className="text-lg" />
                <input
                type="text"
                placeholder="What do you want to listen to?"
                className="w-full bg-gray-800 focus:outline-none"
                onFocus={() => {
                    setIsInputFocused(true);
                }}
                onBlur={() => {
                    setIsInputFocused(false);
                }}
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter"){
                        searchSong();
                    }
                }}
                />
            </div>
            {songData.length > 0 ? (
                <div>
                    <div>
                      Showing search result
                      <span>{searchText}</span>
                    </div>
                    {songData.map((item) => {
                        return(
                            <SingleSongCard
                            info={item}
                            key={JSON.stringify(item)}
                            playSound={() => {}}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="text-gray-400 pt-10">
                    Nothing to show here.
                </div>
            )}

        </div>
       </LoggedInContainer>
    )
}
export default Search;