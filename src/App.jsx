import { useState } from 'react'

// import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>Desserts</h1>
        <ProductList />
      </div>
    </>
  )
}

export default App
