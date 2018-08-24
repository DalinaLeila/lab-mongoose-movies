const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then(celebrity => {
      res.render("book-info", { celebrity });
    })
    .catch(error => {
      console.log(error);
    });
});
module.exports = router;
