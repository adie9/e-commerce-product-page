import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Cart from './components/Cart';

function App() {

  const [showCart, setShowCart] = useState(false);


  return (
    <div>
      <Header showCart={showCart} setShowCart={setShowCart} />
      {showCart == true ? <Cart /> : ""}
      <Content />
    </div>
  )
}

export default App
