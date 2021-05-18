import React, { Component } from 'react'

import './Navbar.css'
import { Button } from '../Button'
import logo from './logo.png'
class Navbar extends Component{
    state = { clicked: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render(){
        const MenuItems = [
            {
                title: 'Home',
                url: '#',
                cName: 'nav-links'
            },
            {
                title: 'Services',
                url: '#',
                cName: 'nav-links'
            },
            {
                title: 'Products',
                url: '#',
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
                <h1 className ='navbar-logo'>Disclosed<img src={logo} className = 'logo'/></h1>
                <div className = 'menu-icon' onClick={this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
        )
    }
}

export default Navbar