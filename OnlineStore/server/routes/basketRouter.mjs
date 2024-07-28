import { Router } from "express";
import basketController from "../controllers/basketController.mjs";

const router = new Router()

router.post('/remove', basketController.remove)
router.get('/', basketController.getBasketDevices)
router.post('/add', basketController.add)

export default router