import queryExecutor from "./queryExecutor";
import chalk from "chalk";
import model from "../../../models/index";

exports.queryBuilder = async (req, res, next) => {
  try {
    let tableName = req.body.tableName;
    let queryModified = false;
    let query;

    // for (let key in model.Company.rawAttributes) {
    //   //to get all columns of a table
    //   console.log("Field: ", key); // this is name of the field
    // }

    if (req.body.columns.input) {
      //make a function to get table name of columns
      query = "select ";
      req.body.columns.column.forEach((column, index) => {
        if (index === req.body.columns.column.length - 1) {
          query = query + " " + column + " from ";
        } else {
          query = query + " " + column + ","; // can make min/max here too
        }
      });
      queryModified = true;
    }
    if (req.body.distinct.input) {
      //distinct values
      query = `Select distinct(${req.body.distinct.column}) from `;
      queryModified = true;
    }
    if (req.body.count.input) {
      //distinct count
      query = `Select count(${req.body.count.column}) from `;
      queryModified = true;
    }
    if (req.body.min.input) {
      //distinct min
      query = `Select min(${req.body.min.column}) from `;
      queryModified = true;
    }
    if (req.body.max.input) {
      //distinct max
      query = `Select max(${req.body.max.column}) from `;
      queryModified = true;
    }
    if (req.body.avg.input) {
      //distinct avg
      query = `Select avg(${req.body.avg.column}) from `;
      queryModified = true;
    }
    if (req.body.sum.input) {
      //distinct sum
      query = `Select sum(${req.body.avg.column}) from `;
      queryModified = true;
    }
    if (!queryModified) {
      query = "Select * from ";
    }
    if (tableName.length > 1) {
      tableName.forEach((table, index) => {
        if (index === tableName.length - 1) {
          query += " " + table;
        } else {
          query = query + " " + table + " join";
        }
      });
    } else {
      query = query + " " + tableName[0];
    }

    if (req.body.where.input) {
      console.log(chalk.red("inside where===>"));
      req.body.where.conditions.forEach((condition, index) => {
        if (index == 0) {
          query = query + " WHERE " + condition;
        } else {
          query = query + " and " + condition;
        }
      });
    }
    if (req.body.groupBy.input) {
      query = query + " GROUP BY " + req.body.groupBy.column;
    }
    if (req.body.orderBy.input) {
      if (req.body.orderBy.desc) {
        query = query + " ORDER  BY " + req.body.orderBy.column + " desc";
      } else {
        query = query + " ORDER  BY " + req.body.orderBy.column;
      }
    }
    if (req.body.limit.input) {
      query = query + " Limit " + req.body.limit.count;
    }

    console.log(chalk.red("query :===>", query));
    let data = await queryExecutor.queryExecutor(query);
    if (data) {
      return data;
    }
  } catch (error) {
    return error;
  }
};
