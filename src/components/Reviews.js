import userone  from './../img/pic-1.png'
import usertwo  from './../img/pic-2.png'
import usertree  from './../img/pic-3.png'
import quote  from './../img/quote-img.png'
import {FaStar} from 'react-icons/fa'

function Reviews ()
{
    return(
        <>
            <section className="review">
                <h1 className="heading"> Avaliações e <span>Comentarios</span> </h1>
                <div className="box_container">
                    <div className="box">
                        <img src={quote} alt='' className="quote"/>
                        <p>Etiam sit amet ipsum porttitor, placerat velit vitae, vehicula ipsum. Ut eu eros convallis, luctus magna mattis, pretium purus. Donec fringilla at nisl eget ornare. Nulla sollicitudin pellentesque volutpat. Mauris at quam sit amet nunc semper consequat vitae non diam. Donec aliquet ligula ut erat finibus, eget congue justo auctor. Nulla quam justo, vehicula eu malesuada sed, elementum vel tellus. Quisque lobortis semper aliquet.</p>
                        <img src={userone} alt='' className='user' />
                        <h3>Fernando</h3>
                        <div className="stars">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>  
                            <FaStar/>  
                            <FaStar/>    
                        </div>
                    </div>
                    <div className="box">
                        <img src={quote} alt='' className="quote"/>
                        <p>Etiam sit amet ipsum porttitor, placerat velit vitae, vehicula ipsum. Ut eu eros convallis, luctus magna mattis, pretium purus. Donec fringilla at nisl eget ornare. Nulla sollicitudin pellentesque volutpat. Mauris at quam sit amet nunc semper consequat vitae non diam. Donec aliquet ligula ut erat finibus, eget congue justo auctor. Nulla quam justo, vehicula eu malesuada sed, elementum vel tellus. Quisque lobortis semper aliquet.</p>
                        <img src={usertwo} alt='' className='user' />
                        <h3>Larissa</h3>
                        <div className="stars">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>  
                            <FaStar/>  
                            <FaStar/>  
                        </div>
                    </div>
                    <div className="box">
                        <img src={quote} alt='' className="quote"/>
                        <p>Etiam sit amet ipsum porttitor, placerat velit vitae, vehicula ipsum. Ut eu eros convallis, luctus magna mattis, pretium purus. Donec fringilla at nisl eget ornare. Nulla sollicitudin pellentesque volutpat. Mauris at quam sit amet nunc semper consequat vitae non diam. Donec aliquet ligula ut erat finibus, eget congue justo auctor. Nulla quam justo, vehicula eu malesuada sed, elementum vel tellus. Quisque lobortis semper aliquet.</p>
                        <img src={usertree} alt='' className='user' />
                        <h3>Guilherme</h3>
                        <div className="stars">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>  
                            <FaStar/>  
                            <FaStar/>  
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews