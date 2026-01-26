import express from "express";
import cors from 'cors'
const PORT = 4000
const app = express()

app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:4200"
        //add production url or ip
    ],
    credentials: true,
    methods: ["GET", "POST"]
}))

app.get('/api/message', (req, res) => {
    res.json('routes are working')
})

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`)
})