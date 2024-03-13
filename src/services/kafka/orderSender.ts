import producer from './producer';

export async function sendOrderToKafka(order: any) {
  try {
    await producer.send({
      topic: 'new_orders',
      messages: [
        { value: JSON.stringify(order) }
      ]
    });
    console.log('Order sent to Kafka:', order);
  } catch (error) {
    console.error('Error sending order to Kafka:', error);
  }
};

export async function createAndSendOrder(order: any) {


  await sendOrderToKafka(order);
};