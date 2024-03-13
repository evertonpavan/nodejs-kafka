import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'orders-api',
  brokers: ['localhost:9092'],
  logLevel: logLevel.ERROR
});

export default kafka;