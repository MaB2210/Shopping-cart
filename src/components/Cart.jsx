
const Cart = ({cartItem, cartTotal, updateQuantity}) => {

    return (
        <div className = "cart-container">
            <h1>Your cart</h1>
            <div className="cart-items">
                {cartItem.length === 0 && <p>No items in the cart.</p>}
                {cartItem.map(item => (
                    <div className="cart-item" key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Price : ${item.price}</p>
                        <p>Quantity : {item.quantity}</p>
                        <p>Total for {item.name} : ${item.price * item.quantity}</p>
                        <button onClick={() => updateQuantity(item.id, 1)}> + </button>
                        &nbsp;
                        <button onClick={() => updateQuantity(item.id, -1)}> - </button>
                    </div>))}
            </div>
            <div className="Cart-total">cart total : ${cartTotal}</div>
        </div>
    )
}

export default Cart;