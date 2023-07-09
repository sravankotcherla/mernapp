const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config()

const app = express();
const port = process.env.PORT;
const connectionString = process.env.DB_STRING;

const { postRoutes } = require("./routes/posts.js")

app.use(express.json());
app.use(cors());
app.use("/posts", postRoutes);

app.get('/', (req, res) => {
    res.send('Express App works');
})

mongoose.connect(connectionString)
    .then(() => {
        console.log("connection to mongoDB successful")
        app.listen(port, () => {
            console.log("Express server listening at port: ", port);
        })
})
    .catch((e) => {
        console.log("Failed to connect to mongoDB")
        console.log(e);
})