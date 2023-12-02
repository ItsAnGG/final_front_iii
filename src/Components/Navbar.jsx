import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Context/Context';

const Navbar = () => {

  const { state, dispatch } = useContextGlobal()

  const handleThemeChange = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "CHANGE_THEME", payload: newTheme });
  }
  

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/">
          <img src="../images/logo.png.png" alt="logo-DH" className='nav-logo'/>
        </Link>
        <div className='navegation'>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contacto" className="nav-link">Contact</Link>
          <Link to="/favs" className="nav-link">Favs</Link>
          <button onClick={handleThemeChange} className='theme-btn'>{state.theme === 'light' ? '☀️' : '🌘'}</button>
        </div>
      </div>
      <div className='blue-stripe'>
        <p>Arregle su comedor con nuestras ofertas especiales de navidad.<a href="#">View now </a> 🡪 </p>
      </div>
    </nav>
  );
  
}

export default Navbar
