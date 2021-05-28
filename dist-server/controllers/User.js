"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _svcUser = _interopRequireDefault(require("../serivces/svcUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (req, res, next) => {
  try {
    let newUser = await _svcUser.default.register(req, res, next);
    return res.status(200).send(newUser);
  } catch (error) {
    console.error("error==>");
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    let User = await _svcUser.default.login(req, res, next);
    return res.send(User);
  } catch (error) {
    console.error("error==>");
    next(error);
  }
};