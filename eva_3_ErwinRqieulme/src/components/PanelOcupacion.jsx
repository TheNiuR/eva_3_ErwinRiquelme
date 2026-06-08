import VehiculoItem from './VehiculoItem';

function PanelOcupacion({ vehiculos, onSalida }) {
  return (
    <div className="panel-ocupacion">
      <h2>Ocupación Actual: {vehiculos.length} vehículos</h2>
      
      {vehiculos.length === 0 ? (
        <p>El estacionamiento está vacío.</p>
      ) : (
        <ul className="lista-vehiculos">
          {vehiculos.map((vehiculo, index) => (
            <VehiculoItem 
              key={index} // Idealmente usar una ID única, pero index sirve para este caso básico
              vehiculo={vehiculo} 
              onSalida={onSalida} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default PanelOcupacion;