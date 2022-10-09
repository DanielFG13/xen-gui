import "./VmDetails.css";
import React from "react";
import panda from "../img/XenPanda.jpg";
import panda_moto from "../img/xen-moto.png";

import hostname from "../img/tag.png";
import cpu from "../img/cpu.png";
import ram from "../img/ram.png";
import disk from "../img/disk.png";
import swap from "../img/swap.png";
import ip from "../img/ip.png";
import mac from "../img/network-card.png";

import state from "../img/state.png";
import cpu_sec from "../img/cup-sec.png";
import cpu_per from "../img/cup-per.png";
import memory_per from "../img/memory-per.png";

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

  if (!props.details.name)
    return (
      <div className="not-selected-container">
        <img className="not-selected-img" src={panda} alt="xen mascot"></img>
        <p className="not-selected-title">Maquina virtual no seleccionada</p>
      </div>
    );

  return (
    <div className="details--container">
      <h1 className="title--section">
        <code>Detalles de la máquina virtual</code>
      </h1>
      <div className="vm-details">
        <div className="item-detail">
          <img src={hostname} alt="hostname"></img>
          <p className="item-detail-title">hostname</p>
          <input type="text" value={props.details.hostname}></input>
        </div>
        <div className="item-detail">
          <img src={cpu} alt="cpu"></img>
          <p className="item-detail-title">vcpus</p>
          <input type="text" value={props.details.vcpus}></input>
        </div>
        <div className="item-detail">
          <img src={ram} alt="ram"></img>
          <p className="item-detail-title">ram</p>
          <input type="text" value={props.details.memory}></input>
        </div>
        <div className="item-detail">
          <img src={disk} alt="disk"></img>
          <p className="item-detail-title">disk</p>
          <input type="text" value={props.details.disk["disk"]}></input>
        </div>
        <div className="item-detail">
          <img src={swap} alt="swap"></img>
          <p className="item-detail-title">swap</p>
          <input type="text" value={props.details.disk["swap"]}></input>
        </div>
        <div className="item-detail">
          <img src={ip} alt="ip"></img>
          <p className="item-detail-title">ip</p>
          <input type="text" value={props.details.vif["ip"]}></input>
        </div>
        <div className="item-detail">
          <img src={mac} alt="mac"></img>
          <p className="item-detail-title">mac</p>
          <input type="text" value={props.details.vif["mac"]}></input>
        </div>
      </div>
      <button className="btn-set-conf">Establecer configuracion</button>
      <h1 className="title--section">
        <code>Detalles de ejecución</code>
      </h1>
      <div className="real-time--details">
        {props.details.isTurnOn ? (
          <div className="vm-realtime-details">
            <div className="item-detail">
              <img src={state} alt="state"></img>
              <p className="item-detail-title">Estado:</p>
              <span className="item-detail-value">
                {stateWord(xentop.state)}
              </span>
            </div>
            <div className="item-detail">
              <img src={cpu_sec} alt="cpu"></img>
              <p className="item-detail-title">CPU(sec):</p>
              <span className="item-detail-value">{xentop.cpu_sec}</span>
            </div>
            <div className="item-detail">
              <img src={cpu_per} alt="cpu"></img>
              <p className="item-detail-title">CPU(%):</p>
              <span className="item-detail-value">{xentop.cpu_per}</span>
            </div>
            <div className="item-detail">
              <img src={memory_per} alt="memory"></img>
              <p className="item-detail-title">Memoria(%):</p>
              <span className="item-detail-value">{xentop.memory_per}</span>
            </div>
          </div>
        ) : (
          <div className="not-started-container">
            <img
              className="not-started-img"
              src={panda_moto}
              alt="xen mascot"
            ></img>
            <p className="not-started-title">
              Enciende la maquina virtual para ver sus estadisticas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

function stateWord(state) {
  switch (state) {
    case "r":
      return "corriendo";
    case "b":
      return "bloqueado";
    case "p":
      return "pausado";
    case "c":
      return "destruido";
    case "d":
      return "muriendo";
    case "s":
      return "apagado";
    default:
      return "sin estado";
  }
}

export default VmDetails;
