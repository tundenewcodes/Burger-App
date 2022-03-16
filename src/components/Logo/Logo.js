import React from "react"

import burgerLogo from '../../Assets/images/133 burger-logo.png'
import classes from "./Logo.module.css"

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
)

export default logo
