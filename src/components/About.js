import imgabout from './../img/about-img.jpeg'

function About () 
{
    return (
        <>
            <section className='about'>
                <h1 className='heading'><span className='about'>Sobre</span> Nos</h1>

                <div className='row'>

                    <div className='image'>
                        <img src={imgabout} alt='' />
                    </div>

                    <div className='content'>
                        <h3>Como voce faz o seu café especial</h3>
                        <p>Curabitur at diam enim. In hac habitasse platea dictumst. Proin quis magna nibh. Vivamus nec nisl in ipsum porta finibus. Donec diam mauris, tempus et ex nec, mollis tempor elit. Fusce ornare mauris id porta tincidunt. Curabitur eu lectus a neque sollicitudin luctus. Etiam at lacus tellus. Praesent sed purus enim. Vivamus convallis purus eget aliquet placerat.</p>
                        <a className='btn'>Leia Mais</a>
                    </div>

                </div>


            </section>
        </>
    )
}

export default About