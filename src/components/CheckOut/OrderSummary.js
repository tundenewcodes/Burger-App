import React from "react"
import Auxilary from "../hoc/auxilary"
import Button from "../UI/Button/Button"


const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientKey) => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: "capitalize" }}> {ingredientKey} </span>
          : {props.ingredients[ingredientKey]}{" "}
        </li>
      )
    }
  )

  return (
    <Auxilary>
      <h2> YOUR ORDER </h2>{" "}
      <p> A delicious and tasty Burger with the following ingredient: </p>{" "}
      <ul> {ingredientSummary} </ul>
      <strong>
        <p> Total Price: $ {props.price} </p>
      </strong>
      <p> press MAKE PURCHASE to buy ? </p>
      <Button btnType="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.makePurchase}>
       MAKE PURCHASE
      </Button>
    </Auxilary>
  )
}

export default OrderSummary
