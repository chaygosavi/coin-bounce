import mongoose from "mongoose";

export default function connect() {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("DB Connected"))
      .catch((error) => console.log(`DB Error : ${error}`));
  } catch (error) {
    console.log(error);
  }
}
