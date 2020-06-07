import React from 'react'
import './NavItem.css'

const NavItem = props => {
    return (
        <div className="Navbar__Item">
        {props.children}
        </div>
    )
}

export default NavItem
