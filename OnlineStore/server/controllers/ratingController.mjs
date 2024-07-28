import ApiError from "../error/ApiError.mjs"
import { Rating } from "../models/models.mjs"

class RatingController {
  async set(req, res, next) {
    let {rate, deviceId, userId} = req.body

    if ((rate > 5 && rate < 0) || !rate) {
      return next(ApiError.badRequest('Не найден валидный рейтинг'))
    }

    const rating = await Rating.create({rate, deviceId, userId})

    return res.json({rating: rating})
  }

  async getRatings(req, res) {
    let {userId, deviceId} = req.query
    let conditions = {}

    if (userId) conditions.userId = userId
    if (deviceId) conditions.deviceId = deviceId

    const ratings = await Rating.findAll({where: conditions})
    return res.json(ratings)
  }
}

export default new RatingController()