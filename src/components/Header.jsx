import '../styles/header.css'
import { useState, useEffect } from 'react';
import Cart from './Cart'

function Header({showCart, setShowCart}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 599);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    const desktopMenu = (
        <nav className='nav'>
            <ul className='nav-items'>
                <li><a>Collection</a></li>
                <li><a>Men</a></li>
                <li><a>Women</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    )
    const mobileMenu = (
        !isMenuOpen ? "" : <nav className='nav'>
            <img src='/images/icon-close.svg' alt='close' onClick={handleToggleMenu}></img>
            <ul className='nav-items'>
                <li><a>Collection</a></li>
                <li><a>Men</a></li>
                <li><a>Women</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    )

    function toggleCart() {
        setShowCart(!showCart);
    }

    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    

    return (
        <header className='header'>
            <img className='icon-menu' src="/images/icon-menu.svg" alt='menu-icon' onClick={handleToggleMenu}></img>
            <img className='logo' src="/images/logo.svg" alt="logo"></img>
            
            { isMobile ? mobileMenu : desktopMenu}
            
            <img className='cart' src='/images/icon-cart.svg' alt='cart' onClick={toggleCart}></img>
            
            <img className='avatar' src='/images/image-avatar.png' alt='avatar'></img>

        </header>
    )
}

export default Header