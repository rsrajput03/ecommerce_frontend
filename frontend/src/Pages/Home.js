import React from 'react'
import Navbar from '../Components/Navbar'
import ProductList from '../Components/ProductList'

const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
  )
}

export default Home