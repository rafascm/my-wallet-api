import joi from 'joi'

const pwdRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%&+]).{6,10}$/

const signIn = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const signUp = joi.object({
  name: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(pwdRegex).required(),
  passwordConfirmation: joi.ref('password'),
});

export { signIn, signUp }
