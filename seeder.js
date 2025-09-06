
---

## 🗂️ `seeder.js`

```javascript
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./src/models/Product.js";
import Contact from "./src/models/Contact.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/inventoryDB";

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("Connected to MongoDB");

    // Clear old data
    await Product.deleteMany();
    await Contact.deleteMany();

    // Insert demo products
    const products = await Product.insertMany([
      { name: "Laptop", quantity: 10, price: 60000 },
      { name: "Phone", quantity: 20, price: 20000 },
    ]);

    // Insert demo contacts
    const contacts = await Contact.insertMany([
      { name: "TechVendor", type: "vendor", phone: "9876543210", email: "vendor@example.com" },
      { name: "John Doe", type: "customer", phone: "9123456780", email: "john@example.com" },
    ]);

    console.log("Demo data seeded ✅");
    console.log("Products:", products);
    console.log("Contacts:", contacts);

    process.exit();
  } catch (error) {
    console.error("Seeder Error:", error);
    process.exit(1);
  }
};

seedData();
