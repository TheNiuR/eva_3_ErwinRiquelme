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


  const registrarIngreso = (nuevoVehiculo) => {
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
        <FormularioIngreso onRegistrar={registrarIngreso} vehiculos={vehiculos} />
        <PanelOcupacion vehiculos={vehiculos} onSalida={registrarSalida} />
     </main>
      <footer>
        <p>Contacto / Créditos</p>
      </footer>
    </div>
  );
}

export default App;