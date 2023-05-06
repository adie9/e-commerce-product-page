import '../styles/content.css'
import { useEffect, useState } from 'react'

function Content({cart, setCart, images, imageIndex, setImageIndex}) {
    const [count, setCount] = useState(0);
    

    useEffect(() => {
        console.log(cart);
     }, [cart]);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count == 0) {
            return
        } else {
            setCount(count - 1);
        }
        
    }

    function next() {
        imageIndex == images.length - 1 ? 
        setImageIndex(0) : setImageIndex(imageIndex + 1);
    }

    function prev() {
        imageIndex == 0 ?
        setImageIndex(images.length - 1) : setImageIndex(imageIndex - 1);
    }

    function addToCart() {
        if (count != 0) {
            setCart([...cart, count]);
        }
        
    }

    return (
        <div className='container'>
            <section className="product-image-section">
                <img id='prev' className='arrow' src='/images/icon-previous.svg' alt='prev' onClick={prev}></img>
                <img id='next' className='arrow' src='/images/icon-next.svg' alt='next' onClick={next}></img>
                <img className="product-image" src={images[imageIndex]} alt="product"></img>
            </section>

            <section className="information-section">
                <h3 className='company'>SNEAKER COMPANY</h3>
                <h2>Fall Limited Edition Sneakers</h2>
                <p className='description'>These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything
                    the weather can offer.
                </p>
                <div className="pricing">
                    <h2 className='price'>$125.00</h2>
                    <span className='deal'>50%</span> 
                    <span className='og-price'>$250.00</span>
                </div>
                <div className="button-group">
                    <button className='amount' type='button'>
                        <img id='minus' src='/images/icon-minus.svg' alt='minus' onClick={decrement}></img>
                        {count}
                        <img id='plus' src='/images/icon-plus.svg' alt='plus' onClick={increment}></img>
                    </button>
                    <button className='add-to-cart' type='button' onClick={addToCart}><img src='../images/icon-cart.svg' alt='icon cart' ></img>Add to Cart</button>
                </div>
            </section>
        </div>
    )
}

export default Content