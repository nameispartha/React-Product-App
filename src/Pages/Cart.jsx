import React, { useContext } from 'react';
import {  CartContextPartha } from '../Context.jsx/CartContext.jsx';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useContext(CartContextPartha);

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ margin: '10px', border: '1px solid gray', padding: '10px' }}>
            <h3>{item.title}</h3>
            <img src={item.image} style={{width:'100px'}}/>
            <p>₹{item.price}</p>
          </div>
        ))
      )}

      <Link to='/'><button>Back to Product-list</button></Link>
    </div>
  );
};

export default CartPage;
