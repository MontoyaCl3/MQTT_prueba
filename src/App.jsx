// App.jsx
import './index.css';
import SidebarMenu from './components/SidebarMenu';
import { Route, Routes } from 'react-router-dom';
import Panel from './components/Panel';
import useMqtt from './hooks/useMqtt';
import MyTabs from "./components/Graphs"


function App() {
  const routingKey = 'CTC/access360/49240044/dyn/temp/notify';
  const messages = useMqtt(routingKey);

  return (
    <div className='flex'>
      <SidebarMenu/>
      <Routes>
        <Route path="/" element={<Panel/>} />
        <Route path="/config" element={<h1>/config</h1>} />
        <Route path="/graphs" element={<MyTabs msg={messages}/>} />
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