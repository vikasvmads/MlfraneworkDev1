"use strict";

var _svcComapny = _interopRequireDefault(require("../serivces/svcComapny"));

var _expressValidator = require("express-validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.allCompany = async (req, res, next) => {
  try {
    let allCampus = await _svcComapny.default.getAllCompany(req, res, next);
    return res.status(allCampus.status).send(allCampus);
  } catch (error) {
    next(error); //res.status(error.errorcode).send(error.message);
  }
};

exports.findById = async (req, res, next) => {
  try {
    let data = await _svcComapny.default.findById(req.params.id);
    return res.send(data);
  } catch (error) {
    next(error); //res.status(error.errorcode).send(error.message);
  }
};

exports.createCompany = async (req, res, next) => {
  try {
    const errors = (0, _expressValidator.validationResult)(req);

    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array()
      });
      return;
    }

    let allCampus = await _svcComapny.default.createCompany(req, res);
    return res.send(allCampus);
  } catch (error) {
    next(error); // res.status(error.errorcode).send(error.message);
  }
};