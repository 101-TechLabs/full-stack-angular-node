import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:4200",
        "http://localhost:4201",
        "http://localhost:4202",
        "http://46.202.167.63:4200",
        "http://46.202.167.63:4201",
        "http://46.202.167.63:4202"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT"]
}));


app.get('/api/message', (req, res) => {
    res.json('production backend is working fine.')
})

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`)
})