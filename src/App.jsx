import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Cart from './components/Cart';

function App() {

  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div>
      <Header showCart={showCart} setShowCart={setShowCart} />
      {showCart == true ? <Cart cart={cart} setCart={setCart} /> : ""}
      <Content cart={cart} setCart={setCart} />
    </div>
  )
}

export default App
