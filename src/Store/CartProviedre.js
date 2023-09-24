import React from 'react'

import CartContext from './cart-context'
const CartProviedre = (props) => {

  const addCartItem = ()=>{};

  const removeCartItem = ()=>{};

  const cartContext = {
    item:[],
    totalAmount:0,
    addItem: addCartItem,
    removeItem: removeCartItem,
  }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProviedre