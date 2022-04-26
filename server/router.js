import Router from 'express'
import InfoController from "./InfoController.js";

const router = new Router()

router.post('/info', InfoController.create)
router.get('/info', InfoController.getAll)
// router.put('/info')
// router.delete('/info/:id')

export default router;