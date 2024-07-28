import { Device, DeviceInfo } from "../models/models.mjs"
import ApiError from "../error/ApiError.mjs"
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import pathConst from "../customModules/pathConst.mjs"

const {__dirname} = pathConst(import.meta.url)

class DeviceController {
  async create(req, res, next) {
    try {
      let {name, price, brandId, typeId, info} = req.body
      console.log('\nrequest\n')
      console.log(req.body)
      const {img} = req.files
      console.log(req.files)
      let fileName = `${uuidv4()}.jpg`
      img.mv(path.resolve(__dirname, '..' ,'static', fileName))
      
      const device = await Device.create({name, price, brandId, typeId, img: fileName})

      if (info) {
        info = JSON.parse(info)
        console.log('\nparsed info\n')
        console.log(info)
        info.forEach(i => DeviceInfo.create({
          title: i.title,
          description: i.description,
          deviceId: device.id
        }))
      }
      
      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {brandId, typeId, limit, page} = req.query
    let devices = []

    page = page || 1
    limit = limit || 9
    let offset = limit * (page - 1)

    let fields = {}
    if (brandId) fields.brandId = brandId
    if (typeId) fields.typeId = typeId

    devices = await Device.findAndCountAll({where: fields, limit, offset})    
    return res.json(devices)
  }

  async getOne(req, res) {
    const {id} = req.params
    const device = await Device.findOne({where: {id}, include:[{model: DeviceInfo, as: 'info'}]})
    return res.json(device)
  }
}

export default new DeviceController()