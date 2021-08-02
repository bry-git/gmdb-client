import {React, useState} from "react";
import {Link } from 'react-router-dom';
import './NavBar.css'



const NavBar = (props) => {
   const [inputValue, setInputValue] = useState('');

   const handleChange= (event) => {
     console.log('navBar', event.target.value);
     setInputValue(event.target.value);
   }

   const handleSubmit = (event) => {
    console.log('submit clicked')
     props.onSubmit(inputValue); 
   }

    return(
        <div className="navbar">
        <div className="top-left">
            <p>GMDB</p>
            <Link to={'/'} className="nav-link">Home</Link>
            <Link to={'/login'} className="nav-link">Login</Link>
        </div>
        <div className="top-right">
          <form onSubmit={handleSubmit}>
            <input className="search" onChange={handleChange} aria-label="search" placeholder="Search"/>
            <input type="submit" className=""/>
          </form>
        </div>
    </div>
    )
}

export default NavBar