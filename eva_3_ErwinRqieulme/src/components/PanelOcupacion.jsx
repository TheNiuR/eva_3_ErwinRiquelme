import VehiculoItem from './VehiculoItem';

function PanelOcupacion({ vehiculos, onSalida }) {
  return (
    <div className="panel-ocupacion">
      <h2>Ocupación Actual: {vehiculos.length} / 10 </h2>
      
      {vehiculos.length === 0 ? (
        <p>El estacionamiento está vacío.</p>
      ) : (
        <ul className="lista-vehiculos">
          {vehiculos.map((vehiculo) => (
            <VehiculoItem 
              key={vehiculo.patente}
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