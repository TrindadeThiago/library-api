import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  publishing_company: {
    type: String,
    required: true,
  },

  picture: {
    type: String,
    required: true,
  },

  authors: {
    default: [],
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('Book', BookSchema);
