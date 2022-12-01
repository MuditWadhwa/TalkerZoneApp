const mongoose=require('mongoose');

const connectDB=async()=>{
  try{
    const conn=await mongoose.connect(process.env.MONGO_URI,{
        usenewURLParser:true,
        useUnifiedTopology:true,
       useFindAndModify:false,
       useNewUrlParser: true,
       useCreateIndex:true
    });
  console.log(`MongoDB Connected: ${conn.connection.host}` .cyan.underline) 
}
  catch(error){
   console.log(`Error is ${error.message}` .red.bold);
   process.exit();
  }
}
module.exports=connectDB;