import isEmpty from "../customModules/isEmpty.mjs"
import ApiError from "../error/ApiError.mjs"
import { BasketDevice } from "../models/models.mjs"

/*TODO: DeviceInfo*/
class BasketController {
  async add(req, res, next) {
    let {basketId, deviceId, deviceInfoId} = req.body    
    if (isEmpty(basketId, deviceId)) {
      return next(ApiError.badRequest("Параметры не должны быть пустыми"))
    }
    let conditions = {}
    conditions = {basketId, deviceId}
    if (!isEmpty(deviceInfoId)) conditions.deviceInfoId = deviceInfoId
  
    const candidate = await BasketDevice.findOne({where: conditions})
    if (candidate) {
      return next(ApiError.badRequest("Этот товар уже есть в корзине"))
    }    

    try {
      const basket_device = await BasketDevice.create(conditions)

      return res.json({basket_device: basket_device})      
    } catch (e) {
      return next(ApiError.badRequest(e.message))
    }
  }

  async remove(req, res, next) {
    let {basketId, deviceId} = req.body

    if (isEmpty(basketId, deviceId)) {
      return next(ApiError.badRequest("Параметры не должны быть пустыми"))
    }

    let candidate = await BasketDevice.findOne({where: {basketId, deviceId}})
    if (!candidate) {
      return next(ApiError.badRequest("Товара нет в корзине"))
    }

    await candidate.destroy()
    
    return res.json({message: "Товар удалён из корзины"})
  }

  async getBasketDevices(req, res) {
    let {basketId, deviceId} = req.query
    let conditions = {}

    if (basketId) conditions.basketId = basketId
    if (deviceId) conditions.deviceId = deviceId

    const basket_devices = await BasketDevice.findAll({where: conditions})
    return res.json(basket_devices)
  }
}

export default new BasketController()