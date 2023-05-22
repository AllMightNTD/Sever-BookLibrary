const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const Book = new Schema({
  title: { type: String, required: true },
  publisher: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  page: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  createdAt : { type : Date , default : Date.now()},
  updatedAt : { type : Date , default : Date.now()}
});
module.exports = mongoose.model('Book' , Book)