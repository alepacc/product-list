import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Order from './components/Order.jsx';
import ProductCard from './components/ProductCard.jsx';

function App() {

  return (
    <>
      <div className='container'>
        <main>
          <h1>Desserts</h1>
          <ProductList />
        </main>
        <Cart />
      </div>
    </>
  )
}

export default App
