
const express = require("express");
const router = express.Router();
const user = require('./UserSchema');

//postrequest
router.post("/",async (req,res) => {
    try{
        const postUser = await new user({
            Name : req.body.Name,
            Age : req.body.Age
        });

        const saveUser = await postUser.save();
        res.status(200).json(saveUser);
       }
catch(err){
    res.json({"err":err});
}

});

//get request
router.get("/",async (req,res) => {
    try{
        const getALL = await user.find();
        res.status(200).json(getALL);
       }
catch(err){
    res.json({"err":err});
}

});

//getbyid
router.get("/:id",async (req,res) => {
    try{
        const getbyid = await user.findById(req.params.id);
        res.status(200).json(getbyid);
       }
catch(err){
    res.json({"err":err});
}
});

//updatebyid

router.put("/:id",async (req,res) => {
    try{
        const updateusers= await user.updateOne({ _id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}});
        res.status(200).json(updateusers);
       }
catch(err){
    res.json({"err":err});
}
});

//delete
router.delete("/:id",async (req,res) => {
    try{
        const deleteusers= await user.deleteOne({ _id:req.params.id});
        res.status(200).json(deleteusers);
       }
catch(err){
    res.json({"err":err});
}
});



module.exports = router;