const express =require('express');
const { addDoctor } = require('../controllers/admin.controller.js');
const upload=require('../middleware/multer.js')


const adminRouter=express.Router();

adminRouter.post('/add-doctor',upload.single('image'),addDoctor)

module.exports=adminRouter