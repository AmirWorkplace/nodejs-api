import Mongoose from 'mongoose';

const bannerProductSchema = Mongoose.Schema(
  {
    headline: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    startingPrice: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    categoryIds: {
      type: String,
      required: true,
    },
    categoryNames: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    bannerImage: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'bannerProducts',
    timestamps: true,
  }
);

const bannerProduct = Mongoose.model('bannerProduct', bannerProductSchema);

export default bannerProduct;
