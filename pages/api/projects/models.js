const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const projectSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
    },
});
  
  
module.exports = mongoose.models.projectSchema || mongoose.model('Project', projectSchema);