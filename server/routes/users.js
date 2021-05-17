import express from "express";
import User from "../controllers/User";
var router = express.Router();

/* GET users listing. */

router.post("/register", User.register);

router.post("/login", User.login);

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
