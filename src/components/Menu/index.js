import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import './'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AlissonFlix Logo" />
            </a>

            <Button href="href" as="a" className="ButtonLink">
                Novo vídeo
            </Button>    
        </nav>
    );
}

export default Menu;