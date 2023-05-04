import '../styles/cart.css'

function CartItems() {
    return (
        <div>
            <p>Cart item</p>
        </div>
    )
}

function Cart({cart, setCart}) {
    return (
        <div className='cart-popup'>
            <h4 className='cart-title'>Cart</h4>
            <hr></hr>
            <div className="cart-content">
                {cart.length > 0 ? <CartItems /> : <p className='empty'>Your cart is empty</p>}
            </div>

        </div>
    )
}

export default Cart