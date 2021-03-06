import React from "react"
import classes from "./BuildControls.module.css"
import BuildControl from "../BuildControl/BuildControl"

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
]

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      total Burger price: <strong> $ {props.price.toFixed(2)} </strong>{" "}
    </p>{" "}
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        addIngredients={() => {
          props.addIngredients(ctrl.type)
        }}
        disabled={props.disabled[ctrl.type]}
        removeIngredients={() => {
          props.removeIngredients(ctrl.type)
        }}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.buyAble}
      onClick={props.buying}
    >
      ORDER NOW{" "}
    </button>{" "}
  </div>
)

export default BuildControls
