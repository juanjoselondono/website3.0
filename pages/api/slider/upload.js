const mongoose = require("mongoose");
var sliderModel = require("./models")
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
      var image = new sliderModel(
        {
            url: req.body.url
        }
      )
      await sendData(image);
      res.send("Sent")
    }
  }