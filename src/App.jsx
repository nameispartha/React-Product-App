import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import ProductList from './Pages/ProductList'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App

