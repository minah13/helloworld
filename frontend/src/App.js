import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('');

  const fetchData = async () => {
    const response = await axios.get('/api/test');
    setMsg(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{msg}</div>;
}

export default App;
