import mongoose from "mongoose";

const schema = new mongoose.Schema({});

export const Listing = mongoose.model("Listing", schema);