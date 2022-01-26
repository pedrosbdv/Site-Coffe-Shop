import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import logo from './../img/logo.png'

function Header () 
{
    return (
        <>
            <header className='header'>
                <a className='logo'>
                    <img src={logo} alt=''/>
                </a>

                <nav className='navbar'>
                    <a>Home</a>
                    <a>Sobre</a>
                    <a>Menu</a>
                    <a>Produtos</a>
                    <a>Avaliações</a>
                    <a>Contato</a>
                    
                </nav>

                <div className='icons'>
                    <FaSearch className='icons_navbar'/> 
                    <FaShoppingCart className='icons_navbar'/>
                    <FaBars id='menu_btn' className='icons_navbar'/> 

                </div>

                <div className='search_form'>
                    <input type='search' id='search_box' placeholder='Pesquise aqui ...'/>
                    <label for='search_box'></label>
                </div>

            </header>

        </>
    )
}

export default Header;
