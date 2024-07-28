import { Router } from "express";
import ratingController from "../controllers/ratingController.mjs";

const router = new Router()

router.post('/', ratingController.set)
router.get('/', ratingController.getRatings)

export default router