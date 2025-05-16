// App.jsx
import { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const routingKey = 'CTC/access360/49240044/dyn/temp/notify';

  useEffect(() => {
    const options = {
      username: 'React',
      password: 'Pymex123',
      connectTimeout: 4000,
      clean: true,
      reconnectPeriod: 1000,
    };

    const client = mqtt.connect(
      'wss://ab0f6c26c91c490c820eb292ba70ec85.s1.eu.hivemq.cloud:8884/mqtt',
      options
    );

    client.on('connect', () => {
      console.log('Connected to MQTT broker');

      client.subscribe(routingKey, (err) => {
        if (err) {
          console.error('Subscription error:', err);
        } else {
          console.log('Subscribed to', routingKey);
        }
      });
    });

    client.on('message', (topic, message) => {
      if (topic === routingKey) {
        try {
          const json = JSON.parse(message.toString());
          setMessages((prev) => [json.message, ...prev]);
        } catch (e) {
          console.warn('Invalid JSON:', message.toString());
        }
      }
    });

    client.on('error', (err) => {
      console.error('MQTT error:', err);
    });

    return () => {
      client.end(true, () => {
        console.log('MQTT client disconnected cleanly');
      });
    };
  }, []);

  return (
    <div>
      <h1>Mensajes MQTT</h1>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
