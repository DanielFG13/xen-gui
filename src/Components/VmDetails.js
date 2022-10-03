import "./VmDetails.css";

const VmDetails = (props) => {
  if (!props.details.name) return <div>Sin seleccionar</div>;
  return (
    <div className="details--container">
      <h1 className="title--section">
        <code>Detalles de la máquina virtual</code>
      </h1>
      <div className="vm-details">
        <div>{props.details.name}</div>
        <div>{props.details.hostname}</div>
        <div>{props.details.vcpus}</div>
        <div>{props.details.memory}</div>
        <div>{props.details.disk["disk"]}</div>
        <div>{props.details.disk["swap"]}</div>
        <div>{props.details.vif["ip"]}</div>
        <div>{props.details.vif["mac"]}</div>
      </div>
      <h1 className="title--section">
        <code>Detalles de ejecución</code>
      </h1>
      <div className="real-time--details">
        {props.details.isTurnOn ? <div>Prendida</div> : <div>Apagada</div>}
      </div>
    </div>
  );
};

export default VmDetails;
