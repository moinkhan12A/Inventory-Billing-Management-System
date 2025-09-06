import Transaction from "../models/Transaction.js";
import Product from "../models/Product.js";

export const createTransaction = async (req, res) => {
  try {
    const { type, customerId, vendorId, products } = req.body;

    let totalAmount = 0;

    for (const item of products) {
      const product = await Product.findOne({ _id: item.productId, businessId: req.user.businessId });
      if (!product) return res.status(404).json({ message: "Product not found" });

      if (type === "sale") {
        if (product.stock < item.quantity) {
          return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
        }
        product.stock -= item.quantity;
      } else if (type === "purchase") {
        product.stock += item.quantity;
      }

      await product.save();
      totalAmount += item.price * item.quantity;
    }

    const transaction = new Transaction({
      type,
      customerId,
      vendorId,
      products,
      totalAmount,
      businessId: req.user.businessId
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const { type, date } = req.query;
    let filter = { businessId: req.user.businessId };

    if (type) filter.type = type;
    if (date) filter.date = { $gte: new Date(date + "T00:00:00"), $lte: new Date(date + "T23:59:59") };

    const transactions = await Transaction.find(filter)
      .populate("customerId vendorId products.productId", "name email category");

    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
