import './Dropdown.css'

function Dropdown(props) {

    const optionChangeHandler = (event) => {
        props.onOptionChange(event.target.value)
    }

    return (
    <div className='select-container'>
        <select className='select' value={props.value} onChange={optionChangeHandler}>
            <option value="no_option">No opción seleccionada</option>
            {props.options.map((option, i) => (
                <option key={i} value={option}>{option}</option>
            ))}
        </select>
    </div>
    )
}

export default Dropdown;

/* Componente padre con este compenente hijo

const [value, setValue] = useState("no_option");

const optionHandler = (option) => {
    setValue(option);
}

console.log(value);

<Dropdown 
    value={value} 
    label="Select ethernet network interface" 
    options={["enp1s0", "eth0"]} 
    onOptionChange={optionHandler}>  
</Dropdown> 

*/