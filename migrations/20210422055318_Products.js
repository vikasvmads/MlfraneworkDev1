const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * dropTable() => "Companies", deps: []
 * createTable() => "Products", deps: []
 *
 */

const info = {
  revision: 2,
  name: "Products",
  created: "2021-04-22T05:53:18.142Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["Companies", { transaction }],
  },
  {
    fn: "createTable",
    params: [
      "Products",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        code: {
          type: Sequelize.STRING,
          field: "code",
          IsEmpty: false,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          field: "name",
          IsEmpty: false,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          IsEmpty: false,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          field: "image",
          IsEmpty: false,
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER,
          field: "price",
          IsEmpty: false,
          allowNull: false,
        },
        category: {
          type: Sequelize.STRING,
          field: "category",
          IsEmpty: false,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          field: "quantity",
          IsEmpty: false,
          allowNull: false,
        },
        inventoryStatus: {
          type: Sequelize.STRING,
          field: "inventoryStatus",
          IsEmpty: false,
          allowNull: false,
        },
        rating: {
          type: Sequelize.INTEGER,
          field: "rating",
          IsEmpty: false,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["Products", { transaction }],
  },
  {
    fn: "createTable",
    params: [
      "Companies",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          field: "name",
          IsEmpty: false,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (this.useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
