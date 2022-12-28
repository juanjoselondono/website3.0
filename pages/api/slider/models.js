const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const sliderSchema = new mongoose.Schema({
  url: {
      type: String,
      required: true,
    },
});
  
  
module.exports = mongoose.models.sliders || mongoose.model('sliders', sliderSchema);