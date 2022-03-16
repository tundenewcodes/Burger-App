import React, { useState, useEffect } from "react"
import CheckOutSummary from "../OrderBurger/CheckoutSummary/CheckOutSummary"
import ContactData from "./Contact-Data/ContactData"
import {
  useNavigate,
  useSearchParams,
  useLocation,
  Routes,
  Route,
} from "react-router-dom"
const CheckOut = () => {
  const [ingredients, setIngredients] = useState(null)
  const [Price, setPrice] = useState(0)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const search = window.location.search
  const Params = new URLSearchParams(search)

  // useEffect(() => {
  //   const ingredient = {}
  //   // convert ingredient object to array
  //  // let price = 0
  //   for (let params of Params.entries()) {
  //   //  if (params[0] === 'price') {
  //     //  price = params[1]
  //    // } else {
  //       ingredient[params[0]] = +params[1]
  //     }

  //   setIngredients(ingredient)
  //   //setPrice(price)
  // },[])

  const stopPurchase = () => {
    navigate(-1)
  }

  const continuePurchase = () => {
     navigate('/checkout/contact-data')
  }
  //<Outlet/>  can be used with * in nested routes
  return (
    <div>
      {" "}
      <CheckOutSummary
        ingredients={ingredients}
        checkOutCancelled={stopPurchase}
        purchaseConfirmed={continuePurchase}
      />{" "}
      <Routes>
        <Route
          path="contact-data"
          element={<ContactData ingredients={ingredients} price={Price} />}
        />
      </Routes>{" "}
    </div>
  )
}

export default CheckOut
