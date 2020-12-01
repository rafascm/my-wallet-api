import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import auth from './controllers/auth'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', auth)

app.listen(process.env.APP_PORT)
