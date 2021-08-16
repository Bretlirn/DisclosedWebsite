import React, { useState } from 'react'

import './Navbar.css';
import { Button } from '../util/ButtonComponent/Button';
import logo from '../../assets/logos/logo.png';

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
            title: 'About Us',
            url: '/aboutus',
            cName: 'nav-links'
        },
        {
            title: 'Event Calendar',
            url: '/eventcalendar',
            cName: 'nav-links'
        },/*,
        {
            title: 'Watch on Youtube',
            url: 'https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA/live',
            cName: 'nav-links-mobile'
        }*/
    ]
    return(
        <nav className = 'NavbarItems'>
            <a className ='navbar-logo' href = '/'><img src={logo} className = 'logo' alt = '???'/>
                <div className = 'logo-name-center'>
                    <h1 className='logo-name'>Disclosed</h1>
                </div>
            </a>
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
            <div style = {{width: "250px", display: "flex", justifyContent: "center", alignContent: "center", marginRight: "25px"}}>
            <div className="dropdown">
                <button className="dropbtn">Get Started</button>
                <div className="dropdown-content">
                    <a href="/participant">Job Seeker</a>
                    <a href="/hiringmanager">Hiring Manager</a>
                </div>
                </div>
            </div>
        </nav>
    );
    //<Button children = "Get Started" onClick = "/getstarted" buttonStyle = "" buttonSizes = ""/>
            
}

export default Navbar