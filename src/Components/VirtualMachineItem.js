import './VirtualMachineItem.css'
import icon from '../img/cliente-linux.png'

const VirtualMachineItem = (props) => {
  return (
    <div className='vm-info' onClick={props.onClick}>
        <img className='vm-icon' src={icon} alt="computer-icon"></img>
        <p className='vm-name'><code>{props.name}</code></p>
        <span className='turnOff'></span>
    </div>
  )
}

export default VirtualMachineItem;