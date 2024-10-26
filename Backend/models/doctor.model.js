const mongoose=require('mongoose')

const doctor=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    image:{
        type:String,
        required:true,
        
    },
    speciality:{
        type:String,
        required:true,
        
    },
    degree:{
        type:String,
        required:true,
        
    },
    experience:{
        type:String,
        required:true,
       
    },
    about:{
        type:String,
        required:true,
        
    },
    available:{
        type:Boolean,
        default:true
        
    },
    fee:{
        type:Number,
        required:true,
        
    },
    address:{
        type:Object,
        required:true,
        
    },
    date:{
        type:Number,
        required:true,
        
    },
   
   
    slot_booked:{
        type:Object,
        default:{}
        
    },


},{timestamps:true},{minimized:false})

const doctorSchema= mongoose.models.doctor || mongoose.model('doctorSchema',doctor)

module.exports=doctorSchema