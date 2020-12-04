import express from 'express'
import cors from 'cors'
import auth from './controllers/auth'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', auth)

export default app
