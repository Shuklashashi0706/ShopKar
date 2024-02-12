import express from "express";
import { connectDB } from "./utils/features.js";
//importing routes;
import userRoute from "./routes/user.js";
const app = express();
const port = 3000;
connectDB();

//middlware
app.use(express.json());

app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
