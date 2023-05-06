import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Cart from './components/Cart';

function App() {
  const images = ["/images/image-product-1.jpg", "/images/image-product-2.jpg", "/images/image-product-3.jpg", "/images/image-product-4.jpg"];
  const [imageIndex, setImageIndex] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);


  return (
    <div>
      <Header showCart={showCart} setShowCart={setShowCart} />
      {showCart == true ? <Cart cart={cart} setCart={setCart} imageIndex={imageIndex} /> : ""}
      <Content cart={cart} setCart={setCart} images={images} imageIndex={imageIndex} setImageIndex={setImageIndex} />
    </div>
  )
}

export default App
