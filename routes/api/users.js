const express = require('express')
const User = require('../../models/Users')
const {check,validationResult} = require('express-validator')
const router = express.Router()

//get all users
router.get('/',async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(ex){
        console.error(ex.message)
        res.status(500).send('Server Error')
    }
})

//get one user
router.get('/:id',async(req,res)=>{
    try{
        const user = await User.findOne({_id:req.params.id})
        if(!user)return res.send(404).json({msg:"user does not exist"})
        res.json(user)
    }catch(ex){
        console.log(ex.message)
        res.send('Server Error').status(500)
    }
})

//create user
router.post('/',[
    check('name','please enter name').not().isEmpty(),
    check('email','Enter a valid email').isEmail(),
    check('password','Enter a password with 6 or more characters').isLength({min:6})
],async(req,res)=>{
    try{
        const {name,email,password}=req.body
        let user = await User.findOne({email})
        if(user)return res.status(400).json({msg:'User already exist'})
        user = new User({
            name,
            email,
            password
        })
        await user.save()
        res.json(user)
    }catch(ex){
        console.error(ex.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router