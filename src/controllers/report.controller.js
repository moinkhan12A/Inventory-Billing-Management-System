import Product from "../models/Product.js";
import Transaction from "../models/Transaction.js";

export const getInventoryReport = async (req, res) => {
  try {
    const products = await Product.find({ businessId: req.user.businessId }).select("name stock category");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTransactionReport = async (req, res) => {
  try {
    const { type, date } = req.query;
    let filter = { businessId: req.user.businessId };

    if (type) filter.type = type;
    if (date) filter.date = { $gte: new Date(date + "T00:00:00"), $lte: new Date(date + "T23:59:59") };

    const transactions = await Transaction.find(filter).populate("products.productId", "name");
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getHistoryByContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const history = await Transaction.find({
      businessId: req.user.businessId,
      $or: [{ customerId: contactId }, { vendorId: contactId }]
    }).populate("products.productId", "name");

    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
