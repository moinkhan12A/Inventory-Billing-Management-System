import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  type: { type: String, enum: ["customer", "vendor"] },
  businessId: String
});

export default mongoose.model("Contact", contactSchema);
