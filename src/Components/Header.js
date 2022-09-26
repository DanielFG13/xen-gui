import './Header.css'

const Header = (props) => {
  return (
    <header className='header--container'>
        <img className='header--img' src={props.img} alt={`${props.img}`}></img>
        <div className='header--info'>
            <h1 className='header--title'>{props.title}</h1>
            <header className='header--text'>{props.text}</header>
        </div>
    </header>
  )
}

export default Header