import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

/* ---------- Middleware ---------- */
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mini-user-management-system-frontend-dogkn5whd.vercel.app"
    ],
    credentials: true
  })
);

/* ---------- Routes ---------- */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

/* ---------- Health Check ---------- */
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

/* ---------- Error Handler (LAST) ---------- */
app.use(errorHandler);

export default app;

