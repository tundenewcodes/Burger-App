import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItem/Navigationitems/NaviagtionItems"
import classes from "./Toolbar.module.css"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"
// import Logo from "../../Logo/Logo"
// import NavigationItems from "../NavigationItems/NavigationItems"
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle  clicked ={props.clicked}/>
    <div className={classes.Logo}>
      {" "}
      <Logo />{" "}
    </div>{" "}
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>{" "}
  </header>
)

export default toolbar

//  <DrawerToggle clicked={props.drawerToggleClicked} />
//     <div className={classes.Logo}>
//       <Logo />
//     </div>
//     <nav className={classes.DesktopOnly}>
//       <NavigationItems />
//     </nav>
