import React, { useState } from "react"
import Button from "../../UI/Button/Button"
import classes from './ContactData.module.css'
import axios  from  '../../../axios-order'
import { Outlet } from "react-router-dom"
const ContactData = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState({
    street: "",
    postalCode: "",
  })
  const [spinning, setSpinning] = useState(false)

 const buyBurger = (e) => {
    e.preventDefault()
    console.log(props.ingredients)
   // alert('you continue')
    setSpinning(true)
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      customer: {
        name: "Max Schwarzmüller",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "Germany",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    }
   axios
      .post("/orders.json", order)
      .then((response) => setSpinning(false))
      .catch((error) => setSpinning(false))
    .then((response) => {
      this.setState({ loading: false, purchasing: false })
    })
    .catch((error) => {
      this.setState({ loading: false, purchasing: false })
    })
  }
  return (
    <div  className={classes.ContactData }>
      <h1>please enter your contact details</h1>
      <form>
        <input className={classes.Input}  type="text" name="name" placeholder="your Name here" />
        <input className={classes.Input} type="text" name="email" placeholder="your Nail here" />
        <input className={classes.Input} type="text" name="street" placeholder="your street here" />
        <input className={classes.Input} type="text" name="postsl" placeholder="your postal code here" />
        <Button btnType="Success"  clicked = {buyBurger}>BUY NOW</Button>
          </form>
          <Outlet/>
    </div>
  )
}

export default ContactData
