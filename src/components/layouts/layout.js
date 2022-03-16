import React, { useState } from "react"
import Auxilary from "../hoc/auxilary"
import classes from "./layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const closeSideDrawer = () => {
    setShowSideDrawer(false)
  }
  const toggleSideDrawer = () => {
    setShowSideDrawer(!showSideDrawer)
  }
  return (
    <Auxilary>
      <Toolbar   clicked ={toggleSideDrawer} />
      <SideDrawer open={showSideDrawer} closed={closeSideDrawer} />{" "}
      <main className={classes.Content}> {props.children} </main>{" "}
    </Auxilary>
  )
}

export default Layout
