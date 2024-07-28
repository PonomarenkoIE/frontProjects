import ApiError from "../error/ApiError.mjs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Basket, User } from "../models/models.mjs"
import isEmpty from "../customModules/isEmpty.mjs"

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {id, email, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class UserController {
  async registration(req, res, next) {
    const {email, password, role} = req.body
    if (isEmpty(email, password)) {
      return next(ApiError.badRequest('Некорректный email или пароль'))
    }

    const candidate = await User.findOne({where: {email}})
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким же email уже существует'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword})
    const basket = await Basket.create({userId: user.id})
    const token = generateJwt(user.id, email, user.role)

    return res.json({token: token})
  }

  async login(req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }

    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Введён неверный пароль'))
    }

    const token = generateJwt(user.id, user.email, user.role)
    return res.json({token: token})
  }

  async check(req, res) {
   const token = generateJwt(req.user.id, req.user.email, req.user.role)
   return res.json({token})
  }
}

export default new UserController() 