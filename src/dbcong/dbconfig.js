import mongoose from "mongoose";

 const connectDB  = async()=>{
  try{
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on('connected' , ()=>{
      console.log('mongodb connected successfully')
    });
    connection.on('error' , (err)=>{
      console.log(err)
    })
  }catch(err){
    console.log(err);
  }

}
export default connectDB;