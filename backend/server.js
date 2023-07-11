
import express  from "express";
import cors from "cors";
import mysql from "mysql"

const app = express();

app.use(cors());

app.listen(8081, () => {
    console.log("Listening on port 8081");
})