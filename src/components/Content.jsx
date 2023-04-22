import '../styles/content.css'


function Content() {
    return (
        <div>
            <section className="product-image-section">
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
                    <button type='button'>0</button>
                    <button type='button'>Add to Cart</button>
                </div>
            </section>
        </div>
    )
}

export default Content