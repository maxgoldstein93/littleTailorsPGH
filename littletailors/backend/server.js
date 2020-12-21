import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();

// --- Connect to Mongoose --- //
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/littleTailorPgh", 
{   useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true });

app.get("/api/products/:id", (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: ` Product not Found`});
    }
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
})
app.use("/api/users", userRouter)
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
