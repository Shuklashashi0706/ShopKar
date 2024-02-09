import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://user:user@cluster0.pjkqrvt.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "ShopKar_DB",
      }
    )
    .then((c)=>console.log(`MongoDB connected`)).catch((error)=>console.log(`Mongodb Error:${error}`));
};
