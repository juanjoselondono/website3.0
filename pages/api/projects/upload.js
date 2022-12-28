const mongoose = require("mongoose");
var projectModel = require("./models")
const uri = process.env.MONGO_URI;
mongoose.connect(uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
const sendData = async(object)=>{
    object.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('done');
      }
    });
  }
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error'))
  export default async function handler(req, res) {
    if (req.method == 'POST') {
      var project = new projectModel(
        {
          name: req.body.name, 
          category: req.body.category,
          Images: req.body.Images,
          content: req.body.content ,
          Date: req.body.Date
        }
      )
      await sendData(project);
      res.send("Sent")
    }
  }