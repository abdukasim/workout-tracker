import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("workout tracker app");
});

app.use("/api", router);

app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
