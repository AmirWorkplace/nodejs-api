import Mongoose from 'mongoose';

const FileSchema = Mongoose.Schema(
  {
    name: { required: true, trim: true, type: String },
    type: { required: true, trim: true, type: String },
    path: { required: true, trim: true, type: String },
    dirPath: { default: null, trim: false, type: String },
  },
  { collection: 'files', timestamps: true }
);

export default Mongoose.model('File', FileSchema);
