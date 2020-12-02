import { Router, Request, Response } from 'express'
import { createUser, isEmailNotUnique } from '../models/users'
import { signUp } from '../schemas/schemas'

const router = Router()

router.post('/sign-up', async (req: Request, res: Response) => {
  const params = req.body

  if (signUp.validate(params).error) return res.sendStatus(422)
  if (await isEmailNotUnique(params.email)) return res.sendStatus(409)

  try {
    const user = await createUser(params)
    return res.status(201).send(user)
  } catch {
    res.sendStatus(500)
  }
})

export default router
