import React from "react"
import classes from "./BuildControl.module.css"
const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}> {props.label} </div>{" "}
      <button
        className={classes.Less}
        onClick={props.removeIngredients}
      disabled = {props.disabled}>
        remove item
      </button>
      <button
        className={classes.More} 
      onClick={props.addIngredients}>
        add item
      </button>
    </div>
  )
}

export default BuildControl
