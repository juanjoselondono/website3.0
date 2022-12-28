
const mongoose = require("mongoose");
var projectModel = require("./models")
const uri = process.env.MONGO_URI;

mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'))
//Define RUD operations
const getDataById = async(target, res) =>{
  projectModel.find({_id: target},(err, result)=>{
    if (err) {
      res.status(400).send({message: 'Bad Request'})
    }
    else{res.status(200).send(result)}
  })
}
// Handle HTTP request.
export default async function  handler(req, res) {
  if( req.method == 'GET'){
    getDataById(req.query.id, res)
  }
}