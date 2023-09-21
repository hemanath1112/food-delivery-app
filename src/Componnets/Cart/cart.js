import React from 'react'
import classes from './cart.module.css'
import Modal from '../UI/Modal'

const cart = (props) => {
    const items =[{id:'c1', name: 'Sushi', amount: 2, price:12.99}]

    const menu= items.map(item=><li>{item.name}</li>)
  return (
    <Modal>
        <ul>
           {menu}
        </ul>
        <div className={[classes.total]}>
            <span>Total Amount</span>
            <span>35.3</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.hideHandler}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default cart