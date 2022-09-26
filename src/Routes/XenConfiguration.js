import { useState } from 'react';
import './XenConfiguration.css'
import screw from '../img/icons8-settings-128.png'
import Dropdown from '../Components/Dropdown';
import Navbar from '../Components/Navbar';

function Xenconfiguration() {

    const [value, setValue] = useState("no_option");

    const optionHandler = (option) => {
        setValue(option);
    }

    return(
        <div className='conf--container'>
            <Navbar></Navbar>
            <div className='page--container'>
                <header className='header--container'>
                    <img className='header--img' src={screw} alt='screw'></img>
                    <div className='header--info'>
                        <h1 className='header--title'>Instalación y configuación de Xen Hypervisor</h1>
                        <header className='header--text'>Instala y configura Xen a tus preferencias de manera rápida y sencilla</header>
                    </div>
                </header>
                <div className='steps--container'>
                    <div className='step'>
                        <h2 className='step--title'><span className='step--number'>1.</span> Instalación de xen Hypervisor</h2> 
                        <p className='step--text'>Xen es una excelente alternativa 
                        para poder crear y configurar tus máquinas virtuales</p>
                        <button className='btn'>Instalar xen Hypervisor en mi equipo</button>
                    </div>
                    <div className='step'>
                        <h2 className='step--title'><span className='step--number'>2.</span> Especifica el nombre del puente</h2> 
                        <p className='step--text'>Elige el nombre de tu puente de red, que servirá para 
                        conectar tu interfaz de ethernet con la interfaz virtual de Xen</p>
                        <input className='input' type='text' placeholder='Nombre del puente'></input>
                        <button className='btn'>Modificar nombre del puente</button>
                    </div>
                    <div className='step'>
                        <h2 className='step--title'><span className='step--number'>3.</span> Especifica tu interfaz de ethenet</h2> 
                        <p className='step--text'>Elige el nombre de interfaz de ethenet de la lista</p>
                        <Dropdown 
                            value={value} 
                            label="" 
                            options={["enp1s0", "eth0"]} 
                            onOptionChange={optionHandler}>  
                        </Dropdown> 
                        <button className='btn'>Establecer como interfaz de ethenet</button>
                    </div>
                    <div className='step'>
                        <h2 className='step--title'><span className='step--number'>4.</span> Especifica la ruta donde se guardarán tus máquinas virtuales</h2> 
                        <p className='step--text'>Elige la ruta donde se guardará el disco y la memoria swap de tus máquinas virtuales</p>
                        <input className='input' type='text' placeholder='Ruta de guardado'></input>
                        <button className='btn'>Establacer como ruta</button>
                    </div>
                    <div className='step'>
                        <h2 className='step--title'><span className='step--number'>5.</span> Reiniciar computadora e iniciar con Xen hypervisor </h2> 
                        <p className='step--text'>Xen ahora se encuentra configurado, cuando este listo para crear sus máquinas virtuales 
                        inicié debian/xen-hypervisor en el grub de linux </p>
                        <button className='btn'>Reiniciar computadora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xenconfiguration;