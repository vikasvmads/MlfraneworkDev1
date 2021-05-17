import axios from "axios";
import users from "../serivces/svcUser";

exports.register = async (req, res, next) => {
  try {
    let newUser = await users.register(req, res, next);
    return res.status(200).send(newUser);
  } catch (error) {
    console.error("error==>");
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    let User = await users.login(req, res, next);
    return res.send(User);
  } catch (error) {
    console.error("error==>");
    next(error);
  }
};
