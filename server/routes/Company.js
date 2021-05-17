import express from "express";
import Company from "../controllers/Company";
import validate from "../validation/validator";
var router = express.Router();

router.get("/AllData", Company.allCompany);
router.get("/:id", Company.findById);
router.post(
  "/createCompany",
  validate.companyValidation("createCompany"),
  Company.createCompany
);
router.get("/", function (req, res, next) {
  res.send("Express");
});

module.exports = router;
