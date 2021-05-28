"use strict";

var _express = _interopRequireDefault(require("express"));

var _User = _interopRequireDefault(require("../controllers/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();
/* GET users listing. */


router.post("/register", _User.default.register);
router.post("/login", _User.default.login);
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
module.exports = router;