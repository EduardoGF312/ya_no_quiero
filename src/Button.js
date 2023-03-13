import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function Button() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    socket.emit('toggleLed', !isOn);
    setIsOn(!isOn);
  };

  return (
    <button onClick={handleClick}>{isOn ? 'Apagar' : 'Encender'}</button>
  );
}

export default Button;