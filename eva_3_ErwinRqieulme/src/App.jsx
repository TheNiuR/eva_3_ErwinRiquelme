import { useState, useEffect } from 'react';
import FormularioIngreso from './components/FormularioIngreso';
import PanelOcupacion from './components/PanelOcupacion';
import './index.css';

function App() {

  const [vehiculos, setVehiculos] = useState(() => {
    const guardados = localStorage.getItem('estacionamiento');
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem('estacionamiento', JSON.stringify(vehiculos));
  }, [vehiculos]);


  const agregarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= 10) {
      alert('El estacionamiento está lleno. No hay cupos disponibles.');
      return;
    }
    setVehiculos([...vehiculos, nuevoVehiculo]);
  };


  const registrarSalida = (patente) => {
    const nuevaLista = vehiculos.filter(v => v.patente !== patente);
    setVehiculos(nuevaLista);
  };

  return (
   <div className="app-container">
     <header>
        <h1>Sistema de Gestión de Estacionamientos</h1>
      </header>
     <main className="dashboard">
        <FormularioIngreso onRegistrar={agregarVehiculo} vehiculos={vehiculos} />
        <PanelOcupacion vehiculos={vehiculos} onSalida={registrarSalida} />
     </main>
      <footer>
        <p>Analista Programador / Erwin Riquelme</p>
      </footer>
    </div>
  );
}

export default App;