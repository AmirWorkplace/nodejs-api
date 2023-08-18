import Mongoose from 'mongoose';

const FileSchema = Mongoose.Schema(
  {
    filename: { required: true, trim: true, type: String },
    fileSlug: { default: null, trim: false, type: String },
  },
  { collection: 'file', timestamps: true }
);

export default Mongoose.model('File', FileSchema);
