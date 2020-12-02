import db from '../db'
import bcrypt from 'bcrypt'

export type User = {
  id: number
  name: string
  email: string
  password: string
  passwordConfirmation: string
  created_on: string,
  last_login: string
}

const createUser = async (user: any) => {
  const { name, email, password } = user

  const encPwd = bcrypt.hashSync(password, 10)

  try {
    const res = await db.query(
      `INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING *`,
      [name, email, encPwd]
    )
    console.log(res)
    return getUserData(res.rows[0])
  } catch (e) {
    console.log(e.message)
  }
}

const isEmailNotUnique = async (email: string) => {
  try {
    const res = await db.query('SELECT * FROM users WHERE email = $1', [email])
    return res.rows.length ? true : false
  } catch (e) {
    console.log(e.message)
  }
}

const getUserData = (user: User) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    created_on: user.created_on,
    last_login: user.last_login,
  }
}

export { createUser, isEmailNotUnique }
