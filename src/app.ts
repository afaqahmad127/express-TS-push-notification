import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import router from "./api/routes";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.use("/api/v1", router);

export default app;
