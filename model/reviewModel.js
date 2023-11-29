const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
   content: {type: String,required:true},
   rating: {type: Number,required:true},
   author: {type: String,required:true},
   createdate: {type: String,required:true},
});

module.exports = new mongoose.model("rating", ratingSchema);