import services from "../serivces/svcComapny";
import { validationResult } from "express-validator";

exports.allCompany = async (req, res, next) => {
  try {
    let allCampus = await services.getAllCompany(req, res, next);
    return res.status(allCampus.status).send(allCampus);
  } catch (error) {
    next(error);
    //res.status(error.errorcode).send(error.message);
  }
};

exports.findById = async (req, res, next) => {
  try {
    let data = await services.findById(req.params.id);
    return res.send(data);
  } catch (error) {
    next(error);
    //res.status(error.errorcode).send(error.message);
  }
};

exports.createCompany = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
      return;
    }
    let allCampus = await services.createCompany(req, res);
    return res.send(allCampus);
  } catch (error) {
    next(error);
    // res.status(error.errorcode).send(error.message);
  }
};
