// App.jsx
import { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import './index.css';
import SidebarMenu from './components/SidebarMenu';
import { Route, Routes } from 'react-router-dom';
import Panel from './components/Panel';

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
          setMessages((prev) => [json, ...prev]);
          
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
    <div className='flex'>
      <SidebarMenu/>
      <Routes>
        <Route path="/" element={<Panel/>} />
        <Route path="/config" element={<h1>/config</h1>} />
        <Route path="/graphs" element={<h1>/graphs</h1>} />
      </Routes>
      <h1>Mensajes MQTT</h1>
      <ul>
        {messages.map((msg, i) => 
          <li key={i}>{msg.Temp}</li>
      )}
      </ul>
    </div>
  );
}

export default App;
