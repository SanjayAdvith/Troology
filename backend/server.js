import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'


dotenv.config()
const app = express()
connectDB()

app.get('/', (req, res) => {
    res.send('server is running...')
})



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('api is running...'))