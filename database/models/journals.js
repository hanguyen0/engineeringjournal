const mongoose = require('mongoose');

const journalSchema = mongoose.Schema({
    id: Number,
    title: String,
    images: [String],
    descriptions: String,
  });
  
  const Journal = mongoose.model('Journal', journalSchema);
  
  module.exports = Journal;