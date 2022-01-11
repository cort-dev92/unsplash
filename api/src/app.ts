import express from "express";
import morgan from "morgan";
import cors from "cors";

import videosRoutes from "./routes/routes";

const app = express();

app.set("port", process.env.PORT || 5000);

console.log(process.env.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(videosRoutes);

export default app;
