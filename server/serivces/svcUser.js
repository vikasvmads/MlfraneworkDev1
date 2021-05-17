import axios from "axios";
import fetch from "node-fetch";
const http = require("http");

exports.register = async (req, res, next) => {
  try {
    console.log("req.body==>", req.body);
    let credentials = {
      username: req.body.username,
      password: req.body.password,
    };
    axios
      .post("http://localhost:3000/users/register", credentials)
      .then((response) => {
        return response;
      })
      .catch((e) => console.log("Error===>", e));
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log("req.body==>", req.body);
    let credentials = {
      username: req.body.username,
      password: req.body.password,
    };
    let user = await axios.post(
      "http://localhost:3000/users/userlogin",
      credentials
    );
    console.log("User in ML framework==>", user.data);
    return user.data;
  } catch (error) {
    console.log(error);
  }
};
