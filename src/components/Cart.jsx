import '../styles/cart.css'

function CartItems({cart}) {
    const items = cart.map((item, index) => 
    
        <li className='item-container' key={index}>
            <img className='thumbnail' src='/images/image-product-1-thumbnail.jpg' alt='product'></img>
            <p>Fall Limited Edition Sneakers <br></br> $125.00 x {item} <span>${125 * item}.00</span></p>
        </li>
    );


    return (
        <div className='cart-items'>
            <ul>{items}</ul>
        </div>
    )
}

function Cart({cart, setCart}) {
    return (
        <div className='cart-popup'>
            <h4 className='cart-title'>Cart</h4>
            <hr></hr>
            <div className="cart-content">
                {cart.length > 0 ? <CartItems cart={cart} /> : <p className='empty'>Your cart is empty</p>}
            </div>

        </div>
    )
}

export default Cart