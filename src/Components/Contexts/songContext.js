import { createContext } from "react";

const songContext = createContext({
    currentSong: null,
    setCurrentSong: (currentSong) => {},
    soundPlayed: null,
    setSoundPlayed: (soundPlayed) => {},
    isPaused: null,
    setIsPlayed: () => {},
});

export default songContext;