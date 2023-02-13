import React from 'react'
import { Routes, Route } from "react-router-dom"
import AddProducts from './AddProducts'
import Cart from './Cart'
import EditProduct from './EditProduct'
import HomePage from './HomePage'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ProductPage from './ProductPage'
export const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add-products' element={
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        } />
        <Route path='/product-page/:productId' element={<ProductPage />} />
        <Route path='/product-page/:productId/edit' element={<EditProduct />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </div>
  )
}
