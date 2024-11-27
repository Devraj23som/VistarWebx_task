
var mongoose=require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoUrl,{
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