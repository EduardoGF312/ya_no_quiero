import React, { useState } from 'react';
import Blynk from 'blynk-library';

// Configura la conexión a Blynk
const AUTH_TOKEN = 'ik86R45NKaQc25kh2ziw2-wjIjEX1gz8';
const blynk = new Blynk.Blynk(AUTH_TOKEN);

// Configura los pines de entrada y salida del ESP32
const pinLED = new blynk.VirtualPin(2); // Pin de salida para encender y apagar el LED
const pinStart = new blynk.VirtualPin(3); // Pin de entrada para iniciar la medición de SPO2
const pinStop = new blynk.VirtualPin(4); // Pin de entrada para detener la medición de SPO2

function App() {
  // Estado para controlar si la medición está activa o no
  const [medicionActiva, setMedicionActiva] = useState(false);

  // Función para encender el LED en el ESP32
  const encenderLED = () => {
    pinLED.write(1);
  };

  // Función para apagar el LED en el ESP32
  const apagarLED = () => {
    pinLED.write(0);
  };

  // Función para iniciar la medición de SPO2 en el ESP32
  const iniciarMedicion = () => {
    setMedicionActiva(true);
    pinStart.write(1);
    encenderLED();
  };

  // Función para detener la medición de SPO2 en el ESP32
  const detenerMedicion = () => {
    setMedicionActiva(false);
    pinStop.write(1);
    apagarLED();
  };

  return (
    <div className="App">
      {medicionActiva ? (
        <button onClick={detenerMedicion}>Detener medición</button>
      ) : (
        <button onClick={iniciarMedicion}>Iniciar medición</button>
      )}
    </div>
  );
}

export default App;