import express from "express";
const app = express();
const port = 3000;
//middlware
app.use(express.json());
app.get("/", (req, res) => {
    res.send("sdg");
});
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
