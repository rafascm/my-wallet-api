import { Pool } from 'pg'

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
})

export default db
