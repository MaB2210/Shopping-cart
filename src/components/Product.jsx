import Cart from "./Cart.jsx";
import {useState} from "react";


const Product = ({sendProduct}) => {
    // const[total,setTotal]=useState(0);
    const[cartItem,setCartItem] = useState([]);


    function addToCart(item) {
        const existingItem = cartItem.find(cart => cart.id === item.id);
        let newCart
        if (existingItem) {
            newCart = cartItem.map(cart => {
                if (cart.id === item.id) {
                    return {
                        ...cart,
                        quantity: cart.quantity + 1
                    }
                } else {
                    return cart
                }
            })
        } else {
            newCart = [...cartItem, { ...item, quantity: 1 }];
        }
        // setTotal(total + item.currentPrice);
        setCartItem(newCart);
    }

   function updateQuantity(id, change){
        const newCart = cartItem
            .map(item => {
                if(item.id === id) {
                    const newQuantity = item.quantity + change;
                    return { ...item, quantity : newQuantity };
                }
                return item;
            }
        )
            .filter(item => item.quantity > 0)
        setCartItem(newCart)
   }

   const cartTotal = cartItem.reduce((total,item) => total + item.price * item.quantity, 0);

    return (
        <>
            <div className="product-grid">
                {sendProduct.map(item => (
                    <div className="product-card" key={item.id}>
                        <h2>Name : {item.name}</h2>
                        <h2>Price : ${item.price}</h2>
                        <button onClick={() => {
                            addToCart(item)
                        }}>Add to cart</button>
                    </div>
                ))}
            </div>
            <Cart
                cartItem={cartItem}
                cartTotal={cartTotal}
                updateQuantity={updateQuantity}/>
        </>
    )
}

export default Product;