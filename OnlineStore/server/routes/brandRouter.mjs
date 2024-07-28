import { Router } from "express";
import brandController from "../controllers/brandController.mjs";
import { checkRole } from "../middleware/checkRoleMiddleware.mjs";
const router = new Router()

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

export default router