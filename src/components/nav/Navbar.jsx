import React from 'react'
import './Navbar.css'
import { Link } from  'react-router-dom'
import Logo from '../../img/logo.png'
import NavItem from './nav-item/NavItem'

const Navbar = () => {
    return (
        <div className="Navbar Shadow-Light">
            
            <Link to="/" className="Link">
                <div className="Logo-Box">
                    <img
                        className="Logo-Box__Logo"
                        src={Logo}
                        alt="colorful logo" 
                    />
                    <p className="Logo-Box__Text">Colorful</p>
                </div>
            </Link>

            <div className="Navbar__List">
                <Link to="/create" className="Link">
                    <NavItem>Create</NavItem>
                </Link>
                <Link to="/saved" className="Link">
                    <NavItem>Saved</NavItem>
                </Link>
                <Link to="/info" className="Link" style={{marginLeft: "auto"}}>
                    <NavItem>About</NavItem>
                </Link>
            </div>

        </div>
    )
}

export default Navbar
