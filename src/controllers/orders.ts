import { createAndSendOrder } from '@/services/kafka/orderSender';
import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid';

const OrderController= {
  create: async (req: Request, res: Response) => {

    // const newOrder = {
    //   orderId: Math.floor(Math.random() * 1000),
    //   product: 'Product Name',
    //   quantity: 2,
    //   price: 20.99,
    //   // Add more properties as needed
    // };

    const newOrder = "aa"

    await createAndSendOrder(newOrder)

    res.send({
      newOrder
    })
  },
}

export { OrderController }
