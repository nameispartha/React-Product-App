import React from 'react'
import { Link } from 'react-router-dom'
import {  CartContextPartha } from '../Context.jsx/CartContext.jsx';
import { useContext } from 'react';

const ProductCard = ({productitem}) => {
      const {AddToCart} = useContext(CartContextPartha);
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
       <h3>{productitem.title}</h3>
       <img src={productitem.image} alt={productitem.title}  width='100px'/>
       <p>${productitem.price}</p>
       <Link to={`/product/${productitem.id}`}> <button>View Details</button></Link>
          <button onClick={() =>AddToCart(productitem)}>Add to cart </button> 
        <Link to='cart'><button>Cart</button></Link>

    </div>
  )
}

export default ProductCard