import mongoose from "mongoose";

// console.log(mongoose)
const connectDB = async () => {
  try {
    
    // console.log('sting' , process.env.MONGO_URI)
  //  const data =  await mongoose.connect(`mongodb+srv://parth26:parth123@mynew.ixwflah.mongodb.net`);
   const data =  await mongoose.connect(`${process.env.MONGO_URI}`);
    const  DBconnection = mongoose.connection;
    DBconnection.on('connected' ,()=>{
      console.log('mongodb connected successfully');
    } );
    DBconnection.on( "error" , (err)=>{
      console.log('database connection error' + err);
      process.exit();
    })
  } catch (err) {
    console.log('i am in catch')
    console.error(err);
  }
};

export default connectDB;
