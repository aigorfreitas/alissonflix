import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import './'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AlissonFlix Logo" />
            </Link>

            <Button to="/cadastro/video" as={Link} className="ButtonLink">
                Novo vídeo
            </Button>    
        </nav>
    );
}

export default Menu;