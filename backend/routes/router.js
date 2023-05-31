const express = require ('express')
const router = express.Router();
const UserSchema = require('../model/UserSchema')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


router.post('/createUser', async (req, res) => {
    const {fullName, phoneNumber, username,password} = req.body;
    console.log(req.body);
    try {
        let user = await UserSchema.findOne({
            username:username
        })
        if(user){
            throw new Error("User already exist");
        }
        console.log("reached here");
        const encryptPassword = await bcrypt.hash(password, 10);
    
        user = new UserSchema({
            fullName:fullName,
            phoneNumber:phoneNumber,
            username:username,
            password:encryptPassword
        })
        console.log(user);
        await user.save();
        return res.status(200).send({
            message:'Registered successfully.'}) 
        
    } catch (err) {
        return res.status(201).send({
            message:`Failed to register. ${err.message}`}) 
    }
})


router.get("/getAllCustomer", async (req, res) => {
    try {
      const allCustomer = await Schema.find({});
      res.send({ status: "ok", customerData: allCustomer });
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/getAllUser", async (req, res) => {
    try {
      const allUser = await UserSchema.find({});
      res.send({ status: "ok", userData: allUser });
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/deleteUser", async (req, res) => {
    const { idNo } = req.body;
    try {
      await UserSchema.deleteOne({ idNo: idNo });
      res.send({ status: "Ok", data: "Deleted" });
    } catch (error) {
      console.log(error);
      res.send({ status: "Error", data: "Deletion failed" });
    }
  });
