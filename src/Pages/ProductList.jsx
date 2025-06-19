import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../Components/ProductCard';
// import {  CartContextPartha } from '../Context.jsx/CartContext';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    // const {AddToCart} = useContext(CartContextPartha)
    const [searchtext, setSearchText] = useState('');
    const [sorted, setSorted] = useState('');


    useEffect(() =>{
        const FetchItems = async () =>{
            try{
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data)
            }catch(error) {
                console.log('Sorry patha error:', (error));
            }
        }
        FetchItems();
    }, []);


    const Filterproducts = products.filter((items) =>
        items.title.toLowerCase().includes(searchtext.toLowerCase())
    ) 


    if(sorted === 'high'){
        Filterproducts.sort((a,b)=> b.price - a.price)
    } else if(sorted === 'low'){
        Filterproducts.sort((a,b) => a.price - b.price)
    }


  return (
    <div><h2><strong>Product-List Page </strong></h2>

    <input type='text' placeholder='Search here...' value={searchtext} onChange={(e)=>setSearchText(e.target.value)}/>

    <select onChange={(e) => setSorted (e.target.value)} value={sorted}>
    <option value=''>Sort By</option>
    <option value='high'>H to L</option>
    <option value='low'>L to H</option>

    </select>

    {/* <button onClick={() => AddToCart(p)}></button> */}

    {Filterproducts.map((productitem) =>(
        <ProductCard key={productitem.id} productitem={productitem} />
    ))}
    </div>

  )
}

export default ProductList;