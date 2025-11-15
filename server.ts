import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
