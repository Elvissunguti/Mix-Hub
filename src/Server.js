
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(
    'mongodb://MixHub:MixHub@ac-isqom7r-shard-00-00.4hx1fud.mongodb.net:27017,ac-isqom7r-shard-00-01.4hx1fud.mongodb.net:27017,ac-isqom7r-shard-00-02.4hx1fud.mongodb.net:27017/MixHub?ssl=true&replicaSet=atlas-7y7x20-shard-0&authSource=admin&retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {
    console.log('Connected to MongoDb Atlas!');
}).catch((err) => {
    console.log('Error connecting to MongoDB Atlas:', err)
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

  const User = mongoose.model('User', {
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
  });

app.post('/register', async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        // CHECK IF USER EXISTS
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.json({ message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            userName,
            email,
            password: hashedPassword
        });

        await user.save();
        res.json({message: "User Created Successfully"})
    } catch (error) {
        console.error(error);
        res.json({message: "Error creating user"})
    }

});

app.post("/login", (request, response) => {
    // check if email exist
    User.findOne({ email: request.body.email})
    
    //if email exist
    .then((user) => {
        // compare password entered and the hashedPassword
        bcrypt.compare(request.body.password, user.password)

        // if password match
        .then((passwordCheck) => {
            // check if password match
            if(!passwordCheck){
                return response.send({
                    message: "Password does not match",
                    error
                });
            }

            // create jwt token 
            const token = jwt.sign(
                {
                    userId: user._id,
                    userEmail: user.email,
                },
                "RANDOM-TOKEN",
                { expiresIn: "24h" }
            );

            // return success response
            response.send({
                message: "Sign in successfull",
                token,
            });

        })
        // catch error if password does not match
        .catch((error) => {
            response.send({
                message: "Passwords does not match",
                error,
            });
        });
    })
    // catch error if email does not match
    .catch((e) => {
        response.send({
            message: "Email not found",
            e,
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

