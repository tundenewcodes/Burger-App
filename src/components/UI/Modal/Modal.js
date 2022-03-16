import React from "react"
import classes from "./Modal.module.css"
import Auxilary from "../../hoc/auxilary"
import Backdrop from "../Backdrop/Backdrop"

const Modal = (props) => {
  return <Auxilary>
    <Backdrop show={props.show} clicked = {props.closeModal}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Auxilary>
}

export default Modal
