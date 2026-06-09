function VehiculoItem({ vehiculo, onSalida }) {
  const handleSalida = () => {
    const confirmar = window.confirm(`¿Confirma que desea dar salida al vehículo con patente ${vehiculo.patente}?`);
    if (confirmar) {
      onSalida(vehiculo.patente);
    }
  };
  return (
    <li className={`vehiculo-item ${vehiculo.permanente ? 'estilo-permanente' : ''}`}>
      <div>
        <strong>{vehiculo.patente}</strong> - {vehiculo.tipo}
        <br />
        <small>Ingreso: {vehiculo.horaIngreso}</small>
      </div>
      <button onClick= {handleSalida} className="btn-salida">
        Dar Salida
      </button>
    </li>
  );
}

export default VehiculoItem;