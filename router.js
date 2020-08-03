const express = require("express");
const router = express.Router();
const InfoRouter = require("./infoSchema");

//post
router.post("/", async (req, res) => {
  var data = new InfoRouter({
    Name: req.body.Name,
    Author: req.body.Author,
    Rating: req.body.Rating,
  });
  await data.save();
  res.json(data);
});

//getall
router.get("/", async (req, res) => {
  var findData = await InfoRouter.find();
  res.json(findData);
});

//update
router.put("/update", async (req, res) => {
  var update = await InfoRouter.update(
    { _id: req.body._id },
    {
      $set: {
        Name: req.body.Name,
        Author: req.body.Author,
        Rating: req.body.Rating,
      },
    }
  );
  res.json(update);
});

//delete
router.delete("/del/:id", async (req, res) => {
  var del = await InfoRouter.findByIdAndRemove(req.params.id).then((e) => {
    res.json({ messAuthor: "deleted successfully" });
  });
});
router.get("/", (req, res) => {
  res.json("Im from router file");
});

module.exports = router;
