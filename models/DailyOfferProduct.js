import Mongoose from 'mongoose';

const dailyDealProductSchema = Mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productAvailableQuantity: {
      type: Number,
      required: true,
    },
    productTitle: {
      type: String,
      required: true,
      trim: true,
    },
    productDescription: {
      type: String,
      trim: true,
      default: null,
    },
    productRating: {
      type: Number,
      required: true,
    },
    productSoldQuantity: {
      type: Number,
      required: true,
    },
    productDiscountPercentage: {
      type: Number,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
      trim: true,
    },
    offerStartingTime: {
      type: String,
      required: true,
    },
    offerEndingTime: {
      type: String,
      required: true,
    },
    averageRatings: {
      type: Number,
      default: null,
    },
    status: {
      type: Boolean,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'daily_deals_products',
    timestamps: true,
  }
);

const DailyDealProduct = Mongoose.model(
  'DailyDealProduct',
  dailyDealProductSchema
);

export default DailyDealProduct;
