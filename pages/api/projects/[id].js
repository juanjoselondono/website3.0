
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
db.on('error', console.error.bind(console, 'MongoDB connection error'))
//Define RUD operations
const sendData = async(object)=>{
  object.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('done');
    }
  });
}
const getDataById = async(target, res) =>{
  projectModel.find({_id: target},(err, result)=>{
    if (err) {
      res.status(400).send({message: 'Bad Request'})
    }
    else{res.send(result)}
  })
}
// Handle HTTP request.
export default async function  handler(req, res) {
  if (req.method == 'POST') {
    var project = new projectModel({name: req.body.name})
    await sendData(project);
    res.status(200).send({ message: 'Checked' })
    return
  }
  else if( req.method == 'GET'){
    getDataById(req.query.id, res)
  }
}