const router = require("express").Router();
const movieModel = require("../model/movieModel");
//add
router.post("/add", async(req,res) => {
    try{
     const newmovie = new movieModel(req.body);
     await newmovie.save().then(()=> {
         res.status(200).json({message: "movie Added Successfully"});
     });
    }catch(error){
     console.log(error);
    }
 });
//getby id
 router.get("/getmovies",async (req,res) => {
    let movie;
    try{
        movie=await movieModel.find();
        res.status(200).json({ movie });
    }catch(error){
        console.log(error);
    }
});
//delete
router.delete("/deletemovie/:id" , async (req,res) => {
    const id = req.params.id;
    try{
        await movieModel
        .findByIdAndDelete(id)
        .then(() => res.status(201).json({message: "deleted successfully"}));
    }catch(error){
        console.log(error);
    }
});
 module.exports = router;