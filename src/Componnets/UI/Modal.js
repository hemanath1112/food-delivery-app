import { Fragment } from "react"
import  ReactDOM  from "react-dom"
import classes from "./Modal.module.css"

const BackDrop = (props)=>{
    return <div className={classes.backdrop} />
}
 
const ShowContent =(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const mainItem = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDrop/>, mainItem)}
        {ReactDOM.createPortal(<ShowContent>{props.children}</ShowContent>, mainItem)}
    </Fragment>
  )
}

export default Modal