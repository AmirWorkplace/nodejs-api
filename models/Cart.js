import Mongoose from 'mongoose';

const cartProductSchema = Mongoose.Schema(
  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productQuantities: {
      type: String,
      required: true,
    },
    productAvailableQuantities: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productMainImage: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'cartProducts',
    timestamps: true,
  }
);

const CartProduct = Mongoose.model('CartProduct', cartProductSchema);

export default CartProduct;
