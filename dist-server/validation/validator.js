"use strict";

var _expressValidator = require("express-validator");

exports.companyValidation = method => {
  console.log("inside validation method", method);

  switch (method) {
    case 'createCompany':
      {
        return [(0, _expressValidator.body)('name', `Name doesn't exists`).not().isEmpty()];
      }
  }
};