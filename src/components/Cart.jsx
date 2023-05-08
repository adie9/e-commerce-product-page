import '../styles/cart.css'

function CartItems({cart, setCart, imageIndex}) {
      

    const thumbnails = ["/images/image-product-1-thumbnail.jpg", 
                        "/images/image-product-2-thumbnail.jpg", 
                        "/images/image-product-3-thumbnail.jpg", 
                        "/images/image-product-4-thumbnail.jpg"];


    const items = cart.map((item, index) => 
    
        <li className='item-container' key={index}>
            <img className='thumbnail' src={thumbnails[imageIndex]} alt='product'></img>
            <p>Fall Limited Edition Sneakers <br></br> $125.00 x {item} <span><strong>${125 * item}.00</strong></span></p>
            <img className='delete' src='/images/icon-delete.svg' alt='delete' ></img>
        </li>
    );


    return (
        <div className='cart-items'>
            <ul>{items}</ul>
        </div>
    )
}

function Cart({cart, setCart, imageIndex}) {
    return (
        <div className='cart-popup'>
            <h4 className='cart-title'>Cart</h4>
            <hr></hr>
            <div className="cart-content">
                {cart.length > 0 ? <CartItems cart={cart} setCart={setCart} imageIndex={imageIndex} /> : <p className='empty'>Your cart is empty</p>}
            </div>

        </div>
    )
}

export default Cart