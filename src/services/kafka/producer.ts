import kafka from './connection';

const producer = kafka.producer();

export async function  initProducer() {
  await producer.connect();
  console.log('Producer connected to Kafka');
};

export default producer;
