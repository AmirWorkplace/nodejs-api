import Mongoose from 'mongoose';

const productSchema = Mongoose.Schema(
  {
    categoryId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    subCategoryId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
    subCategoryName: {
      type: String,
      required: true,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productTitle: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: null,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availableQuantity: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
      required: true,
    },
    mainImage: {
      type: String,
      required: true,
    },
    detailsImages: {
      type: String,
      trim: true,
    },
    soldQuantity: {
      type: Number,
      default: null,
    },
    averageRatings: {
      type: Number,
      default: null,
    },
  },
  {
    collection: 'products',
    timestamps: true,
  }
);

export default Mongoose.model('Product', productSchema);
