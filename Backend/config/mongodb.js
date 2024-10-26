const mongoose=require('mongoose')

const mongoDB=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/wellness?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('mongodb connect successfully')
    }
    catch(e){
        console.log(e)
    }
}

module.exports=mongoDB
