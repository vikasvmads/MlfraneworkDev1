import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import queryRouter from "./routes/queryRouter";
import companyRouter from "./routes/Company";
import bodyParser from "body-parser";
import http from "http";
//import Company from "./models/company";
import cors from "cors";
import { errorHandler } from "./middileware/errorHandler";
let app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("*", cors());
app.use("/", indexRouter);
app.use("/company", companyRouter);
app.use("/users", usersRouter);
//app.use("/query", queryRouter);

app.use(errorHandler);

export default app;
