"use strict";

var _express = _interopRequireDefault(require("express"));

var _Company = _interopRequireDefault(require("../controllers/Company"));

var _validator = _interopRequireDefault(require("../validation/validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get("/AllData", _Company.default.allCompany);
router.get("/:id", _Company.default.findById);
router.post("/createCompany", _validator.default.companyValidation("createCompany"), _Company.default.createCompany);
router.get("/", function (req, res, next) {
  res.send("Express");
});
module.exports = router;