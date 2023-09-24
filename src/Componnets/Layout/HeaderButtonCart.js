import React, {Fragment, useContext} from 'react'
import CartContext from '../../Store/cart-context'
import classes from "./HeaderButtonCart.module.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const HeaderButtonCart = (props) => {
   const Carttext = useContext(CartContext);

   const cartLength = Carttext.item.reduce(( currentValue, items)=>{
    return currentValue + items.amount
   }, 0)

  return (
    <Fragment >
      <button className={classes.cart}  onClick={props.show}>
      <span className={classes.logo} ><ShoppingBasketIcon /></span>
      <span className={classes.content} >Checkout</span> 
     <span className={classes.item}>{cartLength}</span> 
    </button> 
    </Fragment>
  )
}

export default HeaderButtonCart