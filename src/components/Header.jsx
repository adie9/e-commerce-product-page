import '../styles/header.css'
import { useState } from 'react';
import Cart from './Cart'

function Header({showCart, setShowCart}) {
    
    function toggleCart() {
        setShowCart(!showCart);
      }

    return (
        <header className='header'>
            <img className='icon-menu' src="/images/icon-menu.svg" alt='menu-icon'></img>
            <img className='logo' src="/images/logo.svg" alt="logo"></img>
            <nav className='nav'>
                <ul className='nav-items'>
                    <li><a>Collection</a></li>
                    <li><a>Men</a></li>
                    <li><a>Women</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            
            <img className='cart' src='/images/icon-cart.svg' alt='cart' onClick={toggleCart}></img>
            
            <img className='avatar' src='/images/image-avatar.png' alt='avatar'></img>

        </header>
    )
}

export default Header