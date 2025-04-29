
const validator=require('validator')
const bcrypt =require('bcrypt');
const { v2 } = require('cloudinary');
const doctorSchema = require('../models/doctor.model');
// api for creating new doctor

const addDoctor=async(req,res)=>{
    try{
        const{name,email,password,speciality,degree,experience,about,fee,address}=req.body;

        const imageFile=req.file

        console.log({name,email,password,speciality,degree,experience,about,fee,address},imageFile)

        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fee || !address){
            return res.status(404).json({msg:"all fields are  required"})
        }

        // validating email format

        if(!validator.isEmail(email)){
            return res.status(404).json({msg:"email are inccorect format"})
        }

        // validating storng password
        if(password.length<8){
            return res.status(404).json({msg:"enter storng password"})
        }
        // chek email is already regitered or not
        const doctorEmail = await doctorSchema.findOne({ email });

        if (doctorEmail) {
            return res.status(400).json({ msg: "doctor already exist with this email" });
        }

    const hashedPassword=await bcrypt.hash(password,10)

    // uplaod image to cloudianry

    const imageUpload=await v2.uploader.upload(imageFile.path,{resource_type:"image"})
    const imageUrl=imageUpload.secure_url

    const doctorData={
        name,
        email,
        image:imageUrl,
        password:hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fee,
        address,
        date:Date.now()
    }

    const createdDoc=await doctorSchema.create(doctorData)
    return res.status(201).json({ msg: "doctor created successfully", createdDoc});

    }
    catch(err){
        console.log(err)
        return res.status(500).json({mgs:"internal server error"})
    }
}

module.exports={addDoctor}