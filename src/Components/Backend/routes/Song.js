const express = require("express");
const passport = require("passport");
const router = express.Router();
const Song = require("../models/Song");



router.post("/create", 
     passport.authenticate("jwt", {session: false}),
     async (req, res) => {
        const { name, thumbnail, track } = req.body;

        if(!name || !thumbnail || !track){
            return 
             res.json({err: "Insufficient details to create song."})
        }
        const artist = req.user._id;
        const songDetails = { name, thumbnail, track, artist};
        const createdSong = await Song.create(songDetails);
        return res.json(createdSong);
     });


     module.exports = router;









