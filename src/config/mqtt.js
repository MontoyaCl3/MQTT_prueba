import mqtt from 'mqtt';

const options = {
  username: 'React',
  password: 'Pymex123',
  connectTimeout: 4000,
  clean: true,
  reconnectPeriod: 1000,
};

const client = mqtt.connect('wss://ab0f6c26c91c490c820eb292ba70ec85.s1.eu.hivemq.cloud:8884/mqtt', options);

export default client;