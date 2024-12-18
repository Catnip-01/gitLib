// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  borrowedBooks: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
      borrowDate: { type: Date, default: Date.now },
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
