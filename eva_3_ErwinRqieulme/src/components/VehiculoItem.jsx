function VehiculoItem({ vehiculo, onSalida }) {
  return (
    <li className="vehiculo-item">
      <div>
        <strong>{vehiculo.patente}</strong> - {vehiculo.tipo}
        <br />
        <small>Ingreso: {vehiculo.horaIngreso}</small>
      </div>
      <button onClick={() => onSalida(vehiculo.patente)} className="btn-salida">
        Dar Salida
      </button>
    </li>
  );
}

export default VehiculoItem;