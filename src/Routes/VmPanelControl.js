import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./VmPanelControl.css";
import VirtualMachineItem from "../Components/VirtualMachineItem";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import VmDetails from "../Components/VmDetails";
import icon from "../img/work-station.png";

function VmPanelControl() {
  const [vmList, setVmList] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [details, setDetails] = React.useState({});

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleSpecs(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  React.useEffect(() => {
    getVms(vmList);
  }, [vmList]);

  async function getVms() {
    const response = await fetch(
      `http://xengui.com/cgi-bin/getVirtualMachines.py?`
    );
    const data = await response.json();
    setVmList(data["virtualMachines"]);
  }

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
      isTurnOn: isTurnOn,
      name: vm,
    }));
  };

  const handleStart = () => {
    anchorEl.querySelector("span").classList.add("turnOn");
    setDetails((details) => ({ ...details, isTurnOn: true }));
    handleClose();
  };

  const handleShutdown = () => {
    anchorEl.querySelector("span").classList.remove("turnOn");
    setDetails((details) => ({ ...details, isTurnOn: false }));
    handleClose();
  };

  const handleClone = () => {
    console.log("Clonar");
    handleClose();
  };

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
                  <li key={index} className="vm-item">
                    <VirtualMachineItem
                      onClick={handleClick}
                      name={name}
                    ></VirtualMachineItem>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="tools"></div>
          <div className="vm-info--container">
            <VmDetails details={details}></VmDetails>
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
