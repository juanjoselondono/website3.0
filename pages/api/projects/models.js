const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const projectSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
    },
  category:{
    type: String, 
    required: true,
  },
  Images:{
    type: Object,
    required: true,
  },
  Date:{
    type: Date,
    required: true
  },
  content:{
    type: Object, 
    required: true
  }

});
  
  
module.exports = mongoose.models.projects || mongoose.model('projects', projectSchema);