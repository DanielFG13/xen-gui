import './VmPanelControl.css'
import VirtualMachineItem from '../Components/VirtualMachineItem';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import icon from '../img/work-station.png'

function VmPanelControl() {
    return (
        <div className='vm-page--container'>
            <Navbar></Navbar>
            <div className='margin--container'>
                <Header 
                    img={icon}
                    title="Crea y configura máquinas virtuales"
                    text="Crea y administra tus máquinas virtuales de manera rápida y sencilla">
                </Header>
                <div className='panel--container'>
                    <div className='vm-list--container'>
                        <h2 className='list--title'><code>Mis máquinas virtuales</code></h2>
                        <ul className='vm-list'>
                            <li className='vm-item'><VirtualMachineItem name='VmFTP'></VirtualMachineItem></li>
                            <li className='vm-item'><VirtualMachineItem name='vmHTTP'></VirtualMachineItem></li>
                        </ul>
                    </div>
                    <div className='tools'>
                        
                    </div>
                    <div className='vm-info--container'>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VmPanelControl;