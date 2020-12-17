import express from "express"
import data from "./data.js"

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send("Server is ready");

});

const PORT = process.env.PORT || 3637;

app.listen(PORT, () => {
    console.log(`Server is runiing  at http://localhost:${PORT}`)
});
