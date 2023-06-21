import { useEffect, useState } from "react";
import LoggedInContainer from "../Containers/LoggedInContainer";
import SingleSongCard from "../shared/SingleSongCard";


const MyMusic = () => {

    const [ songData, setSongData ] = useState([]);

    useEffect(() => {
        const getToken = () => {
            const accessToken = document.cookie.replace(
                /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
                "$1"
            );
            return accessToken;
        };
        const token = getToken();
      
        const getData = async () => {
          const response = await fetch("http://localhost:3000/get/mysongs", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
      
          const formattedResponse = await response.json();
          setSongData(formattedResponse.data);
        };
      
        getData();
      }, []);

    return (
        <LoggedInContainer curActiveScreen="myMusic">
            <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
                My Songs
            </div>
            <div className="space-y-3 overflow-auto">
                {songData.map((item) => {
                    return <SingleSongCard info={item} playSound={() => {}} />
                })}
            </div>
        </LoggedInContainer>
    )
}

export default MyMusic;