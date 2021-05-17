import model from "../../models/index";

exports.getAllCompany = (req, res, next) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      let allCampus = await model.Products.findAll();
      resolve({ allCampus: allCampus, status: 200, error: null });
    } catch (error) {
      return reject({
        errorcode: error.status,
        message: error.message,
        error: true,
      });
    }
  });
  return promise;
};

exports.findById = (id) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      let allCampus = await model.products.findByPk(id);
      console.log("user details===>", allCampus);
      if (allCampus) {
        resolve({ allCampus: allCampus, errorcode: 200, error: null });
      } else {
        reject({
          message: "No record found",
          errorcode: 500,
          error: null,
        });
      }
    } catch (error) {
      return reject({
        errorcode: error.status,
        message: error.message,
        error: true,
      });
    }
  });
  return promise;
};

exports.createCompany = (req, res, next) => {
  console.log("inside create block");
  let promise = new Promise(async (resolve, reject) => {
    try {
      let allCampus = await model.products.create(req.body);
      console.log("allCampus==>", allCampus);
      if (allCampus) {
        // resolve(allCampus);
        resolve({ allCampus: allCampus, status: 200, error: null });
      }
    } catch (error) {
      return reject({
        errorcode: error.status,
        message: error.message,
        error: true,
      });
    }
  });
  return promise;
};
