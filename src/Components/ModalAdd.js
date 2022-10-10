import * as React from "react";
import "./ModalAdd.css";

function ModalAdd(props) {
  const [hostname, setHostname] = React.useState("");
  const [disk, setDisk] = React.useState("");
  const [ram, setRam] = React.useState("");
  const [swap, setSwap] = React.useState("");
  const [vcpus, setVcpus] = React.useState("");
  const [ip, setIp] = React.useState("");
  const [passwd, setPasswd] = React.useState("");

  const onConfirm = function () {
    props.onSend({ hostname, disk, ram, ip, swap, vcpus, passwd });
    props.onClose();
  };

  if (!props.show) return null;

  return (
    <div className="modal-add-container">
      <div className="modal-add-content">
        <h2 className="modal-add-title">Creacion de maquina virtual</h2>
        <div className="input-container">
          <div className="add-input-item">
            <p className="input-label">Establece el hostname:</p>
            <input
              onChange={(event) => setHostname(event.target.value)}
              type="text"
              placeholder="hostname"
            ></input>
          </div>
          <div className="add-input-item">
            <p className="input-label">Establece el tamano del disco (GB):</p>
            <input
              onChange={(event) => setDisk(event.target.value)}
              type="text"
              placeholder="ej. 10"
            ></input>
          </div>
          <div className="add-input-item">
            <p className="input-label">Establece el tamano de swap (MB):</p>
            <input
              onChange={(event) => setSwap(event.target.value)}
              type="text"
              placeholder="ej. 20"
            ></input>
          </div>
          <div className="add-input-item">
            <p className="input-label">Establece la memoria RAM (MB):</p>
            <input
              onChange={(event) => setRam(event.target.value)}
              type="text"
              placeholder="ej. 1024"
            ></input>
          </div>
          <div className="add-input-item">
            <p className="input-label">
              Establece el numero de cpus virtuales:
            </p>
            <input
              onChange={(event) => setVcpus(event.target.value)}
              type="text"
              placeholder="ej. 1"
            ></input>
          </div>
          <div className="add-input-item">
            <p className="input-label">
              Establece la IP de la maquina virtual:
            </p>
            <input
              onChange={(event) => setIp(event.target.value)}
              type="text"
              placeholder="ej. 192.1.168.130"
            ></input>
          </div>
          <div className="add-input-item">
            <p className="input-label">Establece la contrasena de root: </p>
            <input
              onChange={(event) => setPasswd(event.target.value)}
              type="password"
            ></input>
          </div>
        </div>
        <button className="btn-add" onClick={onConfirm}>
          Crear Maquina Virtual
        </button>
        <button className="btn-add" onClick={props.onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ModalAdd;
