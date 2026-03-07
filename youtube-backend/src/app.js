import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))

// file folder store in public
app.use(express.static("public"))

 //its work is just that i should be able to access cookies in the user browser from my server and perform the curd operation
 app.use(cookieParser())

export { app }

// cors -> whenever do any middlewares or any configur setting. So most of time we use 'app.use(cors())'