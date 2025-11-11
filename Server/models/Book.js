const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
      title: { type: String, required: true},
      auhtor: { type: String},
      description: { type: String},
      publishedYear: { type: Number },
      isbn: { type: String},
      createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, { timestamps: true });

module.exports = mongoose.model('Book' , bookSchema);