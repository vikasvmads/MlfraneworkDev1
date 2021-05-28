"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

var _users = _interopRequireDefault(require("./routes/users"));

var _queryRouter = _interopRequireDefault(require("./routes/queryRouter"));

var _Company = _interopRequireDefault(require("./routes/Company"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

var _errorHandler = require("./middileware/errorHandler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Company from "./models/company";
let app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)());
app.use(_express.default.static(_path.default.join(__dirname, "../public")));
app.use("*", (0, _cors.default)());
app.use("/", _index.default);
app.use("/company", _Company.default);
app.use("/users", _users.default); //app.use("/query", queryRouter);

app.use(_errorHandler.errorHandler);
var _default = app;
exports.default = _default;