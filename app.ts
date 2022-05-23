import express from "express"
import morgan from "morgan"
import cors from "cors"
import routes from "./src/routes/index.routes"
import session from "express-session"
import passport from "passport"
require("dotenv").config()

const server=express() 

server.use(cors({
    origin: "http://localhost:3000",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
    methods:'GET, POST, OPTIONS, PUT, DELETE',
    credentials: true
}))
import "./src/middlewares/passport/local.strategy"
server.use(morgan("dev"))
server.use(express.json())
server.use(session({
    secret: process.env.SECRET_KEY??"test",
    resave: true,
    saveUninitialized: false
}))
server.use(passport.initialize())
server.use(passport.session())
server.set("PORT", process.env.PORT??3001)
server.use(routes)

export default server