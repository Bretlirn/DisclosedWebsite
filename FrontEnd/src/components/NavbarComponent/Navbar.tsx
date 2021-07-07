import React, { useState } from 'react'

import './Navbar.css';
import { Button } from '../Button';
import logo from './logo.png';

const Navbar = () => {
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
        }/*,
        {
            title: 'Watch on Youtube',
            url: 'https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA/live',
            cName: 'nav-links-mobile'
        }*/
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
            <div style = {{width: "350px"}}>
                <Button children = "Watch on Youtube" onClick = "https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA/live" buttonStyle = "" buttonSizes = ""/>
            </div>
        </nav>
    );
}

export default Navbar