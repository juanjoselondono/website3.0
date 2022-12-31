const mongoose = require("mongoose");
var projectModel =  require("./models")
const uri = process.env.MONGO_URI;
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
const getAllData = async(res)=>{
  projectModel.find({},(err, result)=>{
    if (err) {
      res.send("Bad request")
      res.status(400)
      return handleError(err)
    }
    else{
      res.send(result)
      res.status(200)
    }
  })
}
db.on('error', console.error.bind(console, 'MongoDB connection error'))
export default async function handler(req, res) {
  if (req.method == 'GET') {
      getAllData(res)
  }
}