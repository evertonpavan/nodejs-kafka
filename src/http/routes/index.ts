import { Router } from 'express'
import { orderRoutes } from './orders.routes'

const router = Router()

router.use('/', orderRoutes)

export { router }
