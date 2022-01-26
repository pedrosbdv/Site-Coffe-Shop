import menuone from './../img/menu-1.png'
import menutwo from './../img/menu-2.png'
import menutree from './../img/menu-3.png'

function Menu ()
{
    return (
        <>
            <section className="menu">
                <h1 className="heading"> Nosso <span>menu</span> </h1>

                <div className="box_container">
                    <div className="box">
                        <img src={menuone} alt=''/>
                        <h3>Acordar para gostar</h3>
                        <div className='price'>R$15.99 <span>20.99</span></div>
                        <a className='btn'>Adicionar ao carrinho</a>
                    </div>

                    <div className="box">
                        <img src={menutwo} alt=''/>
                        <h3>Acordar para gostar</h3>
                        <div className='price'>R$15.99 <span>20.99</span></div>
                        <a className='btn'>Adicionar ao carrinho</a>
                    </div>

                    <div className="box">
                        <img src={menutree} alt=''/>
                        <h3>Acordar para gostar</h3>
                        <div className='price'>R$15.99 <span>20.99</span></div>
                        <a className='btn'>Adicionar ao carrinho</a>
                    </div>
                </div>

            


            </section>

        </>

    )
}

export default Menu 