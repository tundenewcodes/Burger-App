import React from "react"

import Logo from "../../Logo/Logo"
import NavigationItems from  '../NavigationItem/Navigationitems/NaviagtionItems'
import classes from "./SideDrawer.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop"
import Auxilary from "../../hoc/auxilary"

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }


  // show and clicked props are in the backdrop originally
  return (
    <Auxilary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxilary>
  )
}

export default sideDrawer
