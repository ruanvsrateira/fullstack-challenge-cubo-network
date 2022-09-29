import { routes } from "./routes";
import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());
app.use(routes);

export { app };
