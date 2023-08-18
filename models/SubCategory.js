import Mongoose from 'mongoose';

const subCategorySchema = Mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
      required: true,
    },
    totalProducts: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { collection: 'subCategories', timestamps: true }
);

export default Mongoose.model('SubCategory', subCategorySchema);
