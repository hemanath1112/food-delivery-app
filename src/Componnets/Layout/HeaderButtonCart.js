import React, {Fragment} from 'react'
import classes from "./HeaderButtonCart.module.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const HeaderButtonCart = (props) => {
  return (
    <Fragment >
      <button className={classes.cart}  onClick={props.show}>
      <span className={classes.logo} ><ShoppingBasketIcon /></span>
      <span className={classes.content} >Checkout</span> 
     <span className={classes.item}>3</span> 
    </button> 
    </Fragment>
  )
}

export default HeaderButtonCart