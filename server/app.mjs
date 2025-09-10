// app.mjs
import express from "express";
import assignmentRoutes from "./routes/assignments.mjs";

const app = express();
const port = 4001;

app.use(express.json());

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.use("/", assignmentRoutes);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
