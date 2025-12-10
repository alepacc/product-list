import { useState } from 'react'

// import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>Desserts</h1>
        <ProductList />
        <Cart />
      </div>
    </>
  )
}

export default App
