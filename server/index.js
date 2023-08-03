import "dotenv/config.js";
import connect from "./dbConfig/db.js";
import express from "express";
const app = express();

const PORT = 9999;

connect();

app.listen(PORT, () => console.log("Server running"));
