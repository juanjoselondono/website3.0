const mongoose = require("mongoose");
var projectModel = mongoose.model('Project')
const uri = "mongodb+srv://admin:A86UuLMj5agu6W5K@cluster0.8qdut9e.mongodb.net/projects";

mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
const getAllData = async(res)=>{
  projectModel.find({},(err, result)=>{
    if (err) {return handleError(err)}
    else{res.send(result)}
  })
}
db.on('error', console.error.bind(console, 'MongoDB connection error'))
export default function handler(req, res) {
  if (req.method == 'GET') {
    getAllData(res)
  }
}