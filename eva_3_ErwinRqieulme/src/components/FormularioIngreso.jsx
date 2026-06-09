import { useState } from 'react';

function FormularioIngreso({ onRegistrar, vehiculos }) {
  const [patente, setPatente] = useState('');
  const [tipo, setTipo] = useState('Auto');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formato de patente (4 letras y 2 números)
    const regexPatente = /^[a-zA-Z]{4}[0-9]{2}$/;
    if (!regexPatente.test(patente)) {
      setError('La patente debe tener 4 letras y 2 números (Ej: ABCD12).');
      return;
    }

    if (vehiculos.length >= 10) {
      setError('El estacionamiento está lleno. No hay cupos disponibles.');
      return;
    }

    const nuevoVehiculo = {
      patente: patente.toUpperCase(),
      tipo,
      horaIngreso: new Date().toLocaleTimeString()
    };

    onRegistrar(nuevoVehiculo);
    setPatente('');
    setError(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Registrar Ingreso</h2>
      {error && <p className="error">{error}</p>}
      
      <div>
        <label htmlFor="patenteInput">Patente:</label>
        <input 
          id="patenteInput"
          type="text" 
          value={patente} 
          onChange={(e) => {
            setPatente(e.target.value);
            setError('');}}
          placeholder="Ej: ABCD12"
          maxLength={6}
        />
      </div>

      <div>
        <label htmlFor="tipoVehiculo">Tipo de Vehículo:</label>
        <select id="tipoVehiculo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
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