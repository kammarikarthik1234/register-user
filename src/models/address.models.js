import mongoose from "mongoose";

const { Schema } = mongoose;

const AddressSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  address: {
    type: String,
    required: true,
    unique: true,
  },
});

const AddressModel = mongoose.model("address", AddressSchema, "address");

export default AddressModel;
