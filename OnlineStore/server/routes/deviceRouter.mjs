import { Router } from "express";
import deviceController from "../controllers/deviceController.mjs";
import { checkRole } from "../middleware/checkRoleMiddleware.mjs";

const router = new Router()

router.post('/', checkRole('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

export default router