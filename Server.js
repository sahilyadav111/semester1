const express = require("express");
const app = express();
const movieRoute = require("./model/movieModel")
app.use(express.json())
app.use("/api/s1", movieRoute);

require("./config/connec")
app.listen(2000,()=>{
    console.log("SERVER STARTED SUCCESSFULLY")
});