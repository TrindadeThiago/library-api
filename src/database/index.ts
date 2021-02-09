import mongoose from 'mongoose';

mongoose.connect('mongodb://db_library:27017/library', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
