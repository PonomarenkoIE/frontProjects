import { Router } from "express";
import userRouter from "./userRouter.mjs"
import typeRouter from "./typeRouter.mjs"
import brandRouter from "./brandRouter.mjs"
import deviceRouter from "./deviceRouter.mjs"
import ratingRouter from "./ratingRouter.mjs"
import basketRouter from "./basketRouter.mjs"

const router = new Router()

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/rating', ratingRouter)
router.use('/basket', basketRouter)

export default router