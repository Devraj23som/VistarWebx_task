
var mongoose=require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Devraj23:thakur23@cluster0.v4zkf.mongodb.net/userAuth?retryWrites=true&w=majority&appName=Cluster0",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
module.exports=connectDB;