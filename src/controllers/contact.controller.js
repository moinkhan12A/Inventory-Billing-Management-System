import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const contact = new Contact({ ...req.body, businessId: req.user.businessId });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ businessId: req.user.businessId });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      req.body,
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    await Contact.findOneAndDelete({ _id: req.params.id, businessId: req.user.businessId });
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
