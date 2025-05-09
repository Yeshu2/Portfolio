const express = require("express");
const Contact = require("../models/Contact")
const router = express.Router();

router.post("/addmessage", async (req, res) => {
  try {
    let contact = new Contact(req.body);
    let result = await contact.save();
    res.send(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});
router.get("/getallmessages", async (req, res) => {
  try {
    const getData = await Contact.find();
    res.send(getData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});



module.exports = router;