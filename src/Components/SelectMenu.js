import './SelectMenu.css'

function SelectMenu(props) {

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

export default SelectMenu;