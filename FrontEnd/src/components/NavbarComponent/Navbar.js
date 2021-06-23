import React, { useState } from 'react'

import './Navbar.css'
import { Button } from '../Button'
import logo from './logo.png'

function Navbar (props){
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked);
    }

    const MenuItems = [
        {
            title: 'Home',
            url: '/',
            cName: 'nav-links'
        },
        {
            title: 'Services',
            url: '/Reports',
            cName: 'nav-links'
        },
        {
            title: 'Products',
            url: '/Products',
            cName: 'nav-links'
        },
        {
            title: 'Contact Us',
            url: '#',
            cName: 'nav-links'
        },
        {
            title: 'Sign Up',
            url: '#',
            cName: 'nav-links-mobile'
        }
    ]
    return(
        <nav className = 'NavbarItems'>
            <h1 className ='navbar-logo'>Disclosed<img src={logo} className = 'logo' alt = '???'/></h1>
            <div className = 'menu-icon' onClick={handleClick}>
                <i className = {clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className = {clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key = {index}>
                            <a className = {item.cName} href = {item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <Button> Sign Up </Button>
        </nav>
    );
}

export default Navbar