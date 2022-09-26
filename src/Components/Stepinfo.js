import './Stepinfo.css'

function Stepinfo(props) {
    return(
        <>
            <h2 className='step--title'><span className='step--number'>{props.number}.</span> {props.title}</h2> 
            <p className='step--text'>{props.text}</p>
        </>
    )
}

export default Stepinfo;