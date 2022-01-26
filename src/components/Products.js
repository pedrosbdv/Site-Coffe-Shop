import productone from './../img/product-1.png'
import producttwo from './../img/product-2.png'
import producttree from './../img/product-3.png'
import {FaEye, FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa'

function Products ()
{
    return (
        <>
            <section className="products">

                <h1 className="heading"> Nossos <span>produtos</span> </h1>

                <div className="box_container">
                    <div className="box">
                        <div className="icons">
                            <FaHeart/>
                            <FaShoppingCart/>
                            <FaEye/>
                        </div>
                        <div className="image">
                            <img src={productone} alt=''/>
                        </div>
                        <div className="content">
                            <h3>fresh coffe</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <div className='price' >R$15.99 <span>20.99</span></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icons">
                            <FaHeart/>
                            <FaShoppingCart/>
                            <FaEye/>
                        </div>
                        <div className="image">
                            <img src={producttwo} alt=''/>
                        </div>
                        <div className="content">
                            <h3>fresh coffe</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <div className='price' >R$15.99 <span>20.99</span></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icons">
                            <FaHeart/>
                            <FaShoppingCart/>
                            <FaEye/>
                        </div>
                        <div className="image">
                            <img src={producttree} alt=''/>
                        </div>
                        <div className="content">
                            <h3>fresh coffe</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <div className='price' >R$15.99 <span>20.99</span></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Products