import React, { useState} from 'react'
import Header from './Componnets/Layout/Header'
import './App.css'
import Meals from './Componnets/Meals/Meals'
import Cart from './Componnets/Cart/cart'
import CartProviedre from './Store/CartProviedre'

const App = () => {

const [cartshow, setCartShow] = useState(false);

const showHandler = ()=>{
  setCartShow(true)
}

const hideHandler = ()=>{
  setCartShow(false)
}

  return (
    <CartProviedre>
      {cartshow && <Cart  hideHandler={hideHandler}/>}
      <Header showHandler={showHandler} />
      <Meals />
    </CartProviedre> 
  )
}

export default App