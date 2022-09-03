import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  userid: String,
  emailid: String,
  password: String,
  age: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const UserDetails = mongoose.model("UserDetails", userSchema);

export default UserDetails;
