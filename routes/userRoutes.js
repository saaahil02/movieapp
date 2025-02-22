const express =require('express')
const { loginController,registerController, authController } = require('../controllers/userCtrl')
const authmiddleware = require('../middlewares/authmiddleware')

//routes object 
const router=express.Router()

//Login POST
router.post('/login',loginController)

//Register Post
router.post('/register',registerController)

//Auth Post
router.post('/getUserData',authmiddleware,authController)

module.exports=router