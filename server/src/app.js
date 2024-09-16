import express from "express"
import cors from "cors"

const app = express()

app.use(express.json({limit : "76kb"}));

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))


//importing the routes
import userRoute from "./routes/user.route.js";


app.use("/api/v1/user",userRoute)







export {app}
