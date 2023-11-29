const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ysahil432:sahil112@cluster0.gifso0v.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => console.log("connected"));