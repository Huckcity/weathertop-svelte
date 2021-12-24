require("dotenv").config();
const PORT = process.env.PORT || 3001;

const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db/db");

app.use(cors());
app.use(express.json());
app.use(require("./routes/routes"));

db.connectToServer((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
});
