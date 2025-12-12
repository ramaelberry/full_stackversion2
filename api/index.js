import express from "express";
import cors from 'cors';
import { connectDB } from "../backend/config/db.js";
import userRouter from "../backend/routes/userRoute.js";
import foodRouter from "../backend/routes/foodRoute.js";
import cartRouter from "../backend/routes/cartRoute.js";
import orderRouter from "../backend/routes/orderRoute.js";
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Serve uploaded images
app.use("/images", express.static(path.join(__dirname, '../backend/uploads')));

app.get("/", (req, res) => {
    res.send("API Working");
});

// Export the Express app as a serverless function
export default app;

