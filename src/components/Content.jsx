import '../styles/content.css'
import { useState } from 'react'

function Content() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <section className="product-image-section">
                <img id='prev' className='arrow' src='/images/icon-previous.svg' alt='prev'></img>
                <img id='next' className='arrow' src='/images/icon-next.svg' alt='next'></img>
                <img className="product-image" src="/images/image-product-1.jpg" alt="product 1"></img>
            </section>

            <section className="description">
                <h3 className='company'>SNEAKER COMPANY</h3>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything
                    the weather can offer.
                </p>
                <div className="pricing">
                    <h2 className='price'>$125.00</h2>
                    <span className='deal'>50%</span>
                    <span className='og-price'>$250.00</span>
                </div>
                <div class="button-group">
                    <button className='amount' type='button'>
                        <img id='minus' src='/images/icon-minus.svg' alt='minus'></img>
                        0
                        <img id='plus' src='/images/icon-plus.svg' alt='plus'></img>
                    </button>
                    <button className='add-to-cart' type='button'><img src='../images/icon-cart.svg' alt='icon cart'></img>Add to Cart</button>
                </div>
            </section>
        </div>
    )
}

export default Content