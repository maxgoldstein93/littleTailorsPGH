import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// --- Connect to Mongoose --- //
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/littleTailorPgh", 
{   useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get('/', (req, res) => {
    res.send("Server is ready");

});
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

const PORT = process.env.PORT || 3637;

app.listen(PORT, () => {
    console.log(`Server is runiing  at http://localhost:${PORT}`)
});
