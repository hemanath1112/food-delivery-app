import React, {Fragment, useState} from 'react'
import Header from './Componnets/Layout/Header'
import './App.css'
import Meals from './Componnets/Meals/Meals'
import Cart from './Componnets/Cart/cart'

const App = () => {

const [cartshow, setCartShow] = useState(false);

const showHandler = ()=>{
  setCartShow(true)
}

const hideHandler = ()=>{
  setCartShow(false)
}

  return (
    <Fragment >
      {cartshow && <Cart  hideHandler={hideHandler}/>}
      <Header showHandler={showHandler} />
      <Meals />
    </Fragment> 
  )
}

export default App