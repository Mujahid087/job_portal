import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
import userRoute from "./routes/user.route.js"
import jobRoute from "./routes/job.route.js"
import companyRoute from "./routes/company.route.js"
import applicationRoute from "./routes/application.route.js"

dotenv.config({})


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use(cors({
  origin: 'http://localhost:5173', // Your React app's URL
  credentials: true, // Important for cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
 // adjust to your frontend URL


const PORT=process.env.PORT || 5000


app.use("/api/user", userRoute);
app.use("/api/job",jobRoute)
app.use("/api/company",companyRoute)
app.use("/api/application",applicationRoute)

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`)
})