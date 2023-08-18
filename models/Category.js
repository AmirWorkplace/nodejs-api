import Mongoose from 'mongoose';

const categorySchema = Mongoose.Schema(
  {
    status: { type: Boolean, default: false },
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, default: null },
    productsItems: { type: Number, trim: true, default: 0 },
    totalProducts: { type: Number, trim: true, default: 0 },
    slug: { type: String, trim: true, required: true },
  },
  { collection: 'categories', timestamps: true }
);

export default Mongoose.model('Category', categorySchema);
