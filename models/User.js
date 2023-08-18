import Mongoose from 'mongoose';

const userSchema = Mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Others'],
      required: true,
    },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    user_id: { type: String, trim: true, default: null },
    photo: { type: String, default: null },
    status: { type: Boolean, default: true },
    trash: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default Mongoose.model('User', userSchema);
