const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
//const path = require("path");
//var bodyParser = require("body-parser");

/*const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
*/

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const infoRouter = require("./router");
app.use("/info", infoRouter);
const PORT = 5000;

app.listen(PORT, () => {
  console.log("server started on port 5000");
});

//FQx4KXLFUuYu9m6l

const uri = process.env.mongodb || "mongodb://localhost/mybooks";
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("db connection successfull");
    }
  }
);
