import cors from "cors";
import express from "express";
import exceptionRoutes from "./routes/exceptions";

const app = express();
const port = Number(process.env.PORT ?? 3004);

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ service: "cpim-app-contentgeneration", status: "ok" });
});

app.use(exceptionRoutes);

app.listen(port, () => {
  console.log(`cpim-app-contentgeneration listening on http://localhost:${port}`);
});
