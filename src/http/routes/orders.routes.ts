import { OrderController } from '@/controllers/orders'
import { Router } from 'express'

const orderRoutes = Router()

orderRoutes.post('/orders', OrderController.create)

export { orderRoutes }
