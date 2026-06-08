import { useState } from 'react';

function FormularioIngreso({ onRegistrar, vehiculos }) {
  const [patente, setPatente] = useState('');
  const [tipo, setTipo] = useState('Auto');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!patente.trim()) {
      setError('La patente es obligatoria.');
      return;
    }

    // Validar si la patente ya está en el estacionamiento
    const existe = vehiculos.find(v => v.patente.toUpperCase() === patente.toUpperCase());
    if (existe) {
      setError('Este vehículo ya se encuentra en el estacionamiento.');
      return;
    }

    const nuevoVehiculo = {
      patente: patente.toUpperCase(),
      tipo,
      horaIngreso: new Date().toLocaleTimeString()
    };

    onRegistrar(nuevoVehiculo);
    setPatente('');
    setError(''); // Limpiar errores
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Registrar Ingreso</h2>
      {error && <p className="error">{error}</p>}
      
      <div>
        <label>Patente:</label>
        <input 
          type="text" 
          value={patente} 
          onChange={(e) => setPatente(e.target.value)} 
          placeholder="Ej: AB1234"
        />
      </div>

      <div>
        <label>Tipo de Vehículo:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="Auto">Auto</option>
          <option value="Moto">Moto</option>
          <option value="Camioneta">Camioneta</option>
        </select>
      </div>

      <button type="submit">Ingresar Vehículo</button>
    </form>
  );
}

export default FormularioIngreso;