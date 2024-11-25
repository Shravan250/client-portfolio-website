const Contact = require("../models/Contact");

exports.storeContactInfo = async (req, res) => {
  try {
    const { username, email, message, phone } = req.body;

    const newContact = new Contact({ username, email, message, phone });

    await newContact.save();
    res.status(201).json({ message: "Contact info saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
