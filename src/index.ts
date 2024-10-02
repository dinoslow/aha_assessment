import dotenv from "dotenv";
import express from "express";
import router from "./routes/authRoutes";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/api", router);

app.listen(process.env.BACK_PORT, () => {
    console.log(`server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`);
});
