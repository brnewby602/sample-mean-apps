var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/* 
Example data:
  {
    "name": "Mr. Wiskers",
    "weight": 1200,
    "age": 53,
    "disposition": "Ornery",
    "imageURL": "https://christopherjgervais.files.wordpress.com/2016/01/368375.jpg?w=493&h=309",
    "favorite": "Eating"
  }

*/

var manateeSchema = Schema({
  name: {
    type: String,
    unique: true
  },
  weight: Number,
  age: Number,
  disposition: String,
  imageUrl: String,
  favorite: String
});

var Manatee = mongoose.model('Manatee', manateeSchema) ;

module.exports = Manatee;
