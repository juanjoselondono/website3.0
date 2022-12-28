const mongoose = require("mongoose");
var sliderModel = require("./models")
const uri = process.env.MONGO_URI;
mongoose.connect(uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
const deleteData = async(uri, res)=>{
    sliderModel.deleteOne({url: uri}).then(()=>{
        console.log('Deleted')
        res.status(200)
        res.send({data: 'Object deleted successfully'})
    }).catch((error)=>{
        console.log(error)
        res.send('Bad Request, [api/delete]')
        res.status(400)
    })
  }
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error'))
  export default async function handler(req, res) {
    if (req.method == 'POST') {
      await deleteData(req.body.target, res);
    }
  }