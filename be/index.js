require("dotenv").config();
const express = require("express");
const app = express();
//integration
const cors = require("cors");
//connection
const connectToMongo = require("./db");
const VisitCounter = require("./models/visitorcount");

connectToMongo();
app.use(express.json());
//port
const port = process.env.PORT || 8000;
app.use(cors());

//route set
app.get("/visit-count", async (req, res) => {
  try {
    // Find and increment total_visits atomically
    const visitCounter = await VisitCounter.findOneAndUpdate(
      {}, // Match first document
      { $inc: { total_visits: 1 } }, // Increment total_visits by 1
      { new: true, upsert: true } // Return updated doc; create if none
    );

    res.json({ totalVisits: visitCounter.total_visits });
  } catch (error) {
    console.error("Error updating visit count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.use("/api/contact", require("./routes/contact"));

app.listen(port, () => {
  console.log(`app listen ${port}`);
});
