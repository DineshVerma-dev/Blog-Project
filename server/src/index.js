import dotenv from "dotenv"
import connectDB from "./database/db.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(` Server is running at port : http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MONOGO db connection failed ", err)
    })

