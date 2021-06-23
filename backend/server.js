import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoute.js'
import uploadRoutes from './routes/uploadRoutes.js'


dotenv.config()
const app = express()
connectDB()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('server is running...')
})


app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('api is running...'))