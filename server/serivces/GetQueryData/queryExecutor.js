// import { QueryTypes } from "sequelize";
// import model from "../../../models/index";

// import sequelize from "sequelize";

// exports.queryExecutor = (query) => {
//   let promise = new Promise(async (resolve, reject) => {
//     try {
//       let data = await model.sequelize.query(query, {
//         type: QueryTypes.SELECT,
//       });
//       if (data) {
//         resolve({ query: query, data: data });
//       } else {
//         reject(new Error("data not found"));
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
//   return promise;
// };
