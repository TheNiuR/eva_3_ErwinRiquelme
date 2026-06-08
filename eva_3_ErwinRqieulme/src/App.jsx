import { useState, useEffect } from 'react';
import FormularioIngreso from './components/FormularioIngreso';
import PanelOcupacion from './components/PanelOcupacion';
import './index.css';

function App() {
  // Inicializar estado leyendo de LocalStorage
  const [vehiculos, setVehiculos] = useState(() => {
    const guardados = localStorage.getItem('estacionamiento');
    return guardados ? JSON.parse(guardados) : [];
  });

  // Persistir en LocalStorage cada vez que cambie la lista de vehículos
  useEffect(() => {
    localStorage.setItem('estacionamiento', JSON.stringify(vehiculos));
  }, [vehiculos]);

  // Función para registrar un nuevo ingreso
  const registrarIngreso = (nuevoVehiculo) => {
    setVehiculos([...vehiculos, nuevoVehiculo]);
  };

  // Función para registrar salida
  const registrarSalida = (patente) => {
    const nuevaLista = vehiculos.filter(v => v.patente !== patente);
    setVehiculos(nuevaLista);
  };

  return (
    <div className="app-container">
      <h1>Sistema de Gestión de Estacionamientos</h1>
      <div className="dashboard">
        <FormularioIngreso onRegistrar={registrarIngreso} vehiculos={vehiculos} />
        <PanelOcupacion vehiculos={vehiculos} onSalida={registrarSalida} />
      </div>
    </div>
  );
}

export default App;