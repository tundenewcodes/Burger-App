import React, { useState, useEffect } from "react"
import Auxilary from "./hoc/auxilary"
import Burger from "../components/Burger/Burger"
import OrderSummary from "../components/CheckOut/OrderSummary"
import BuildControls from "../components/Buildcontrol/BuildControls/BuildControls"
import withErrorHandler from "./layouts/withErrorHandler/withErrorHandler"
import Modal from "./UI/Modal/Modal"
import axios from "../../src/axios-order"
import  {useNavigate} from 'react-router-dom'
//import axioss from "axios"
import Spinner from "../../src/components/UI/Spinner/Spinner"

const INGREDIENT_PRICES = {
  salad: 1.5,
  cheese: 2,
  meat: 3,
  bacon: 1.2,
}

const BurgerBuilder = () => {
  // or you set ingredients to null then refactor in a 'let variable to the component'
  const [ingredients, setIngredients] = useState(null) // if ingredients is set to some values like meat: 1 , bacon :2, restructuring not needed
  const [price, setPrice] = useState(5)
  const [buyAble, setBuyAble] = useState(false) // when one ingredient or more is selected
  const [buying, setBuying] = useState(false) //this is on checkout button when clicked
  const [spinning, setSpinning] = useState(false) // to show spinner or not
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const updatePurchaseState = (ingredient) => {
    //const ingredient = {...ingredients}
    //use updatedIngredient when calling function instead
    const sum = Object.keys(ingredient)
      .map((ingredientKey) => {
        return ingredient[ingredientKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    setBuyAble(sum > 0)
  }

  const addIngredients = (type) => {
    let oldCount = ingredients[type]
    let newCount = oldCount + 1
    let updatedIngredients = { ...ingredients }
    updatedIngredients[type] = newCount

    const priceValue = price
    const givenPrice = INGREDIENT_PRICES[type]
    const newPrice = priceValue + givenPrice
    setPrice(newPrice)
    setIngredients(updatedIngredients)
    updatePurchaseState(updatedIngredients)
  }

  const removeIngredients = (type) => {
    let oldCount = ingredients[type]
    //this cares for cases where ingredients is 0 or less
    if (oldCount <= 0) {
      return
    }
    let newCount = oldCount - 1
    let updatedIngredients = { ...ingredients }
    updatedIngredients[type] = newCount

    const priceValue = price
    const givenPrice = INGREDIENT_PRICES[type]
    const newPrice = priceValue - givenPrice
    setPrice(newPrice)
    setIngredients(updatedIngredients)
    updatePurchaseState(updatedIngredients)
  }

  const purchaseHandler = () => {
    setBuying(true)
  }

  const closeModal = () => {
    setBuying(false)
  }

  // passing state and props as query parameter to children component
  const makePurchase = () => {
    navigate('/checkout')
    // const queryParams = []
    // for (let i in ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]))
    // }
    // //queryParams.push('price=' + price)
    // const queryString = queryParams.join('&')
    // navigate({
    //   pathname : '/checkout',
    //   search : '?' + queryString
    // })

    //alert('you continue')
    // setSpinning(true)
    // const order = {
    //   ingredients: ingredients,
    //   price: price,
    //   customer: {
    //     name: "Max Schwarzmüller",
    //     address: {
    //       street: "Teststreet 1",
    //       zipCode: "41351",
    //       country: "Germany",
    //     },
    //     email: "test@test.com",
    //   },
    //   deliveryMethod: "fastest",
    // }
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => setSpinning(false), setBuying(false))
    //   .catch((error) => setSpinning(false), setBuying(false))
    // .then((response) => {
    //   this.setState({ loading: false, purchasing: false })
    // })
    // .catch((error) => {
    //   this.setState({ loading: false, purchasing: false })
    // })
  }
  // when the app loads or renders on the page i want to fetch ingredients values from the database
  useEffect(() => {
    axios
      .get(
        "https://react-burger-app-3b157-default-rtdb.firebaseio.com/ingredient.json"
      )
      .then((response) => setIngredients(response.data))
      .catch((error) => {
        setError(true)
      })
  }, [])
  const getIngredients = { ...ingredients }
  for (let key in getIngredients) {
    getIngredients[key] = getIngredients[key] <= 0 // i.e return true or fa3se if less than or equals 0  or otherwise
  } // returns object like salad : true, meat : false, salad : true

  let showOrderSummary = null
  if (spinning) {
    showOrderSummary = <Spinner />
  }

  let burgerPage = error ? (
    <p style={{ textAlign: "center", color: "red", fontStyle: "italic" }}>
      {" "}
      NETWORK ERROR : ingredient 's cant be fecthed at the moment
    </p>
  ) : (
    <Spinner />
  )

  if (ingredients) {
    burgerPage = (
      <Auxilary>
        <Burger ingredients={ingredients} />{" "}
        <BuildControls
          addIngredients={addIngredients}
          removeIngredients={removeIngredients}
          disabled={getIngredients}
          price={price}
          buyAble={buyAble}
          buying={purchaseHandler}
        />
      </Auxilary>
    )
    showOrderSummary = (
      <OrderSummary
        ingredients={ingredients}
        makePurchase={makePurchase}
        cancel={closeModal}
        price={price}
      />
    )
  }

  return (
    <Auxilary>
      <Modal show={buying} closeModal={closeModal}>
        {showOrderSummary} 
      </Modal>
      {burgerPage}
    </Auxilary>
  )
}

export default withErrorHandler(BurgerBuilder, axios)
