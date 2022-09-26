import { useState } from 'react';
import './XenConfiguration.css'
import screw from '../img/icons8-settings-128.png'
import Dropdown from '../Components/Dropdown';
import Navbar from '../Components/Navbar';
import Stepinfo from '../Components/Stepinfo';
import Header from '../Components/Header';

function Xenconfiguration() {

    const [value, setValue] = useState("no_option");

    const optionHandler = (option) => {
        setValue(option);
    }

    return(
        <div className='conf--container'>
            <Navbar></Navbar>
            <div className='page--container'>
                <Header 
                    img={screw} 
                    title="Instalación y configuación de Xen Hypervisor"
                    text="Instala y configura Xen a tus preferencias de manera rápida y sencilla">
                </Header>
                <div className='steps--container'>
                    <div className='step'>
                        <Stepinfo 
                            title="Instalación de xen Hypervisor"
                            number="1"
                            text="Xen es una excelente alternativa para poder crear y configurar tus máquinas virtuales">
                        </Stepinfo>
                        <button className='btn'>Instalar xen Hypervisor en mi equipo</button>
                    </div>
                    <div className='step'>
                        <Stepinfo 
                            title="Especifica el nombre del puente"
                            number="2"
                            text="Elige el nombre de tu puente de red, que servirá para conectar tu interfaz de ethernet con la interfaz virtual de Xen">
                        </Stepinfo>
                        <input className='input' type='text' placeholder='Nombre del puente'></input>
                        <button className='btn'>Establece nombre del puente</button>
                    </div>
                    <div className='step'>
                        <Stepinfo 
                            title="Especifica tu interfaz de ethenet"
                            number="3"
                            text="Elige el nombre de interfaz de ethenet de la lista">
                        </Stepinfo>
                        <Dropdown 
                            value={value} 
                            label="" 
                            options={["enp1s0", "eth0"]} 
                            onOptionChange={optionHandler}>  
                        </Dropdown> 
                        <button className='btn'>Establecer como interfaz de ethenet</button>
                    </div>
                    <div className='step'>
                        <Stepinfo 
                            title="Especifica la ruta donde se guardarán tus máquinas virtuales"
                            number="4"
                            text="Elige la ruta donde se guardará el disco y la memoria swap de tus máquinas virtuales">
                        </Stepinfo>
                        <input className='input' type='text' placeholder='Ruta de guardado'></input>
                        <button className='btn'>Establacer como ruta</button>
                    </div>
                    <div className='step'>
                        <Stepinfo 
                            title="Reiniciar computadora e iniciar con Xen hypervisor"
                            number="5"
                            text="Xen ahora se encuentra configurado, cuando este listo para crear sus máquinas virtuales inicié debian/xen-hypervisor en el grub de linux">
                        </Stepinfo>
                        <button className='btn'>Reiniciar computadora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xenconfiguration;