import { Router } from "express";
import typeController from "../controllers/typeController.mjs";
import { checkRole } from "../middleware/checkRoleMiddleware.mjs";

const router = new Router()

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

export default router