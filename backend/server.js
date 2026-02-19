import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));

app.use(express.json()); 
app.use("/api/auth", authRoutes);

app.listen(1573, () => {
  console.log("Backend running on http://localhost:1573");
});
