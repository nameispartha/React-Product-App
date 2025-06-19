import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContextPartha } from '../Context.jsx/CartContext.jsx';

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const {addToCart} = useContext(CartContextPartha);

  useEffect(() => {
    const Fetch = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log("✅ Full product details:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.log('❌ Error loading product details:', error);
      }
    };

    Fetch();
  }, [id]);

  if (!products || !products.title) return <h2>Loading Please wait bro !</h2>;

  return (
    <div style={{ padding: '30px' }}>
      <h2>{products.title}</h2>
      <img src={products.image} alt={products.title} style={{ width: '200px' }} />
      <p><strong>Price:</strong> ${products.price}</p>
      <p><strong>Category:</strong> {products.category}</p>
      <button onClick={() =>addToCart(products)}>Add to cart </button> 
       {/* <Link to='cart'><button>Cart</button></Link> */}
        <Link to='/'><button>Back to Product-list</button></Link>
    </div>
  );
};

export default ProductDetails;
