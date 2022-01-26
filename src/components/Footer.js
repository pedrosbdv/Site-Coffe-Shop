import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer ()
{
    return(
        <>
            <section className="footer">
                <div className="shar">
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                </div>

                <div className="links">
                    <a>Home</a>
                    <a>Sobre</a>
                    <a>Menu</a>
                    <a>Produtos</a>
                    <a>Avaliações</a>
                    <a>Contato</a>
                </div>

                <div className="credit">criado pelo <span>Pedro Santos Basilio</span> || todos os direitos reservados</div>

            </section>
        </>
    )
}

export default Footer