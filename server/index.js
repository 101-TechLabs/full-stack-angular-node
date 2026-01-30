import express from "express";
import cors from 'cors'
const PORT = 4000
const app = express()

app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:4200",
        "http://46.202.167.63:4200"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT"]
}));


app.get('/api/message', (req, res) => {
    res.json('qa backend is working fine')
})

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`)
})