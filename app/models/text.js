var mongoose = require('mongoose');

var textSchema = mongoose.Schema({
    text : {
      name  : String,
      content : [{
        level : Number,
        elements : [{
          words    : String,
          selected : [{
                word  : String,
                value : String
          }]
        }]
      }]
    }
});


module.exports = mongoose.model('text', textSchema);