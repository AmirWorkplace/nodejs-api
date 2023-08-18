import Mongoose from 'mongoose';
const orderSchema = new Mongoose.Schema(
  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    profileId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    ordererName: {
      type: String,
      required: true,
      trim: true,
    },
    ordererEmail: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: String,
      required: true,
    },
    detailsAddress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    transactionId: {
      type: String,
      default: null,
    },
    customerTransactionId: {
      type: String,
      default: null,
    },
    customerAccountNumber: {
      type: String,
      required: true,
      trim: true,
    },
    paymentAccountNumber: {
      type: String,
      required: true,
      trim: true,
    },
    paymentType: {
      type: String,
      required: true,
      trim: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    totalQuantity: {
      type: Number,
      required: true,
    },
    customerPaymentAmount: {
      type: Number,
      required: true,
    },
    paymentDue: {
      type: Number,
      required: true,
    },
    deliveryStatus: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: 'orders',
    timestamps: true,
  }
);

export default Mongoose.model('Order', orderSchema);
