import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./VmPanelControl.css";
import VirtualMachineItem from "../Components/VirtualMachineItem";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import VmDetails from "../Components/VmDetails";
import icon from "../img/work-station.png";

import add from "../img/add.png";
import ModalAdd from "../Components/ModalAdd";
import Spinner from "../Components/Spinner";

function VmPanelControl() {
  const [isLoading, setLoading] = React.useState(false);
  const [vmList, setVmList] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [details, setDetails] = React.useState({});
  const [active, setActive] = React.useState({ name: "" });
  const [showAdd, setShowAdd] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleSpecs(event.currentTarget);
    setActive({ name: event.currentTarget.innerText });
  };

  const handleClose = () => setAnchorEl(null);

  async function getVms() {
    const response = await fetch(
      `http://xengui.com/cgi-bin/getVirtualMachines.py`
    );
    const data = await response.json();
    setVmList(data["virtualMachines"]);
  }

  React.useEffect(() => {
    getVms();
  }, [active]);

  async function getDetails(name) {
    const response = await fetch(
      `http://xengui.com/cgi-bin/getVmDetails.py?name=${name}`
    );
    const vmDetails = await response.json();
    return vmDetails;
  }

  const handleSpecs = async (el) => {
    const vm = el.innerText;
    const isTurnOn = el.querySelector("span").classList.contains("turnOn");
    const vmDetails = await getDetails(vm);
    setDetails((lastDetails) => ({
      ...lastDetails,
      ...vmDetails,
      isTurnOn,
      name: vm,
    }));
  };

  async function startVm(name) {
    const response = await fetch(
      `http://xengui.com/cgi-bin/startVm.py?name=${name}`
    );
    const data = await response.json();
    return data;
  }

  const handleStart = async () => {
    anchorEl.querySelector("span").classList.add("turnOn");
    const data = await startVm(details["name"]);
    if (!data["error"]) {
      setDetails((lastDetails) => ({
        ...lastDetails,
        name: details["name"],
        isTurnOn: true,
      }));
    }
    handleClose();
  };

  async function stopVm(name) {
    const response = await fetch(
      `http://xengui.com/cgi-bin/stopVm.py?name=${name}`
    );
    const data = await response.json();
    return data;
  }

  const handleShutdown = async () => {
    anchorEl.querySelector("span").classList.remove("turnOn");
    const data = await stopVm(details["name"]);
    if (!data["error"]) {
      setDetails((lastDetails) => ({
        ...lastDetails,
        name: details["name"],
        isTurnOn: false,
      }));
    }
    handleClose();
  };

  const handleClone = () => {
    console.log("Clonar");
    handleClose();
  };

  const openModal = () => {
    setShowAdd(true);
  };

  const closeModal = () => {
    setShowAdd(false);
  };

  const onSend = async (newVM) => {
    try {
      const response = await fetch(
        `http://xengui.com/cgi-bin/createVM.py?hostname=${newVM.hostname}&disk=${newVM.disk}&swap=${newVM.swap}&ram=${newVM.ram}&ip=${newVM.ip}&vcpus=${newVM.vcpus}&passwd=${newVM.passwd}`
      );
      setLoading(true);
      const data = await response.json();
      setLoading(false);
      console.log(data);
      return data;
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="vm-page--container">
      <Navbar></Navbar>
      <div className="margin--container">
        <Header
          img={icon}
          title="Crea y configura máquinas virtuales"
          text="Crea y administra tus máquinas virtuales de manera rápida y sencilla"
        ></Header>
        <div className="panel--container">
          <div className="vm-list--container">
            <h2 className="list--title">
              <code>Mis máquinas virtuales</code>
            </h2>
            <ul className="vm-list">
              {vmList.map((name, index) => {
                return (
                  <li
                    key={index}
                    className={`vm-item ${
                      active.name === name ? "vm-item-active" : ""
                    }`}
                  >
                    <VirtualMachineItem
                      onClick={handleClick}
                      name={name}
                    ></VirtualMachineItem>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="tools">
            <img src={add} alt="add" onClick={openModal}></img>
          </div>
          <div className="vm-info--container">
            <VmDetails details={details}></VmDetails>
            <ModalAdd
              show={showAdd}
              onClose={closeModal}
              onSend={onSend}
            ></ModalAdd>
          </div>
        </div>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleStart}>Encender</MenuItem>
        <MenuItem onClick={handleShutdown}>Apagar</MenuItem>
        <MenuItem onClick={handleClone}>Clonar</MenuItem>
      </Menu>
    </div>
  );
}

//sudo cp -rf build /var/www/html/

export default VmPanelControl;
