
import './App.css'
import Product from "./components/Product.jsx";


function App() {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 15 },
        { id: 3, name: 'Product 3', price: 20 },
    ];
    return (
        <div>
            <h1>Shopping cart</h1>
            <hr/>
            <Product sendProduct = {products}/>
        </div>

    )
}

export default App
