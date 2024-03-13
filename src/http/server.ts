import express from 'express'
import { router } from './routes'
import cors from 'cors'
import { env } from '@/env'
import { initProducer } from '@/services/kafka/producer'

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

const runServices = async () => {
  await initProducer();
};

runServices().catch(error => {
  console.error('Error running services:', error);
});

app.listen(env.PORT, () => console.log(`Server is running on ${env.PORT}`))


