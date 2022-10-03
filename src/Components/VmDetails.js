import "./VmDetails.css";
import React from "react";

const VmDetails = (props) => {
  const [xentop, setXentop] = React.useState({});

  React.useEffect(() => {
    async function getXentop() {
      console.log(props.details.name);
      const response = await fetch(
        `http://xengui.com/cgi-bin/getXentop.py?name=${props.details.name}`
      );
      const data = await response.json();
      console.log(data);
      setXentop(data);
    }
    const interval = setInterval(() => {
      if (!props.details.isTurnOn) return clearInterval(interval);
      getXentop();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.details.name, props.details.isTurnOn]);

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
        {props.details.isTurnOn ? (
          <div>
            <div>Estado: {xentop.state}</div>
            <div>CPU(sec): {xentop.cpu_sec}</div>
            <div>CPU(%): {xentop.cpu_per}</div>
            <div>Memoria(%): {xentop.memory_per}</div>
          </div>
        ) : (
          <div>Apagada</div>
        )}
      </div>
    </div>
  );
};

export default VmDetails;
