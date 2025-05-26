import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { LineChart, XAxis, CartesianGrid, YAxis, Line } from 'recharts';
import useMqtt from '../hooks/useMqtt';

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Grafica({ data }) {
    console.log(data[0])
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line isAnimationActive={false} type="monotone" dataKey="X" stroke="#8884d8" />
    </LineChart>
  );
}

export default function MyTabs() {
  const routingKey = 'CTC/access360/49240044/dyn/vib/notify';
  const messages = useMqtt(routingKey);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Primera" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="Segunda" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="Tercera" id="tab-2" aria-controls="tabpanel-2" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grafica data={messages}/>    
        </TabPanel>
      <TabPanel value={value} index={1}>
        Contenido de la segunda pestaña
      </TabPanel>
      <TabPanel value={value} index={2}>
        Contenido de la tercera pestaña
      </TabPanel>
    </Box>
  );
}
