import {FaUser, FaEnvelope} from 'react-icons/fa'

function Contacts ()
{
    return(
        <>
            <section className="contact">
                <h1 className="heading"> Contate <span>nós</span> </h1>
                <div className="row">

                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770252.9490995661!2d-74.42380481188793!3d41.05148983072717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1spt-BR!2sbr!4v1643164938324!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy"></iframe>

                    
                    <form className="">
                        <h3>Entre em contato</h3>
                        <div className="inputBox">
                            <span><FaUser/></span>
                            <input type="text" placeholder="nome"/>
                        </div>
                        <div className="inputBox">
                            <span><FaEnvelope/></span>
                            <input type="email" placeholder="email"/>
                        </div>
                        <input type="submit" className="btn" value="Enviar contato"/>
                    </form>

                </div>

            </section>
        </>
    )
}

export default Contacts 
