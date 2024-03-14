import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'orders-api',
  brokers: ['127.0.0.1:9092'],
  logLevel: logLevel.ERROR
});

export default kafka;