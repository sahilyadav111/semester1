const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
   title: {type: String,required:true},
   description: {type: String,required:true},
   genre: {type: String,required:true},
   review: {type: String,required:true},
   releaseyear: {type: Number ,required:true},
});

module.exports = new mongoose.model("movies", movieSchema);