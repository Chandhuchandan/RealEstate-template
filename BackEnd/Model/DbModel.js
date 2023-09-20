import mongoose from "mongoose";

const DbSchema = new mongoose.Schema({
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  typeOfProperty: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  square_feet: Number,
  photos: [String],
});

export const DbModel = mongoose.model("realestate", DbSchema);
