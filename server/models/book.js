// backend/models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  isbn: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  quantity: { type: Number, required: true },
  borrowed: { type: Number, default: 0 },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
