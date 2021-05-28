"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const http = require("http");

exports.register = async (req, res, next) => {
  try {
    console.log("req.body==>", req.body);
    let credentials = {
      username: req.body.username,
      password: req.body.password
    };

    _axios.default.post("http://localhost:3000/users/register", credentials).then(response => {
      return response;
    }).catch(e => console.log("Error===>", e));
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log("req.body==>", req.body);
    let credentials = {
      username: req.body.username,
      password: req.body.password
    };
    let user = await _axios.default.post("http://localhost:3000/users/userlogin", credentials);
    console.log("User in ML framework==>", user.data);
    return user.data;
  } catch (error) {
    console.log(error);
  }
};