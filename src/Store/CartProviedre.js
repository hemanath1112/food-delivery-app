import React from 'react'

import CartContext from './cart-context'


const CartProviedre = (props) => {
  return (
    <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProviedre