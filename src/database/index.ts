import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/library', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
