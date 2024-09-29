import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema, "user");

export default userModel;
