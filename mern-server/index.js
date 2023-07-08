const express = require("express");
const mongoose=require("mongoose")

const app = express();
const port = 7700;

const {postRoutes}= require("./routes/posts.js")

app.use("/posts", postRoutes);

const connectionString="mongodb+srv://sravan:sravan@cluster0.6lczp0p.mongodb.net/?retryWrites=true&w=majority"

app.get('/', (req, res) => {
    res.send('Express App works');
})

mongoose.connect(connectionString)
    .then(() => {
    console.log("connection to mongoDB successful")
})
    .catch((e) => {
        console.log("Failed to connect to mongoDB")
        console.log(e);
})


app.listen(port, () => {
    console.log("Express server listening at port: ", port);
})