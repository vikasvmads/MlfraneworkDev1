"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();
/* GET home page. */


router.get('/', function (req, res, next) {
  res.send('Express');
});
module.exports = router;