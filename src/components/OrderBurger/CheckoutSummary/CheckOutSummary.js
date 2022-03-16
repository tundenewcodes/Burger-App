import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'
//import { Link,Outlet } from 'react-router-dom';
import classes from   './CheckOutSummary.module.css'

const CheckOutSummary = (props) => {
    return (
      <div className={classes.CheckOutSummary}>
        <h3>very tasty and nutritious burger. we do hope you enjoy it</h3>
        <div style={{ width: "100%", margin: "auto" }}>
          <Burger ingredients={props.ingredients} />
        </div>
        <Button btnType="Danger" clicked={props.checkOutCancelled}>
          CANCEL
        </Button>
          <Button btnType="Success" clicked={props.purchaseConfirmed}>
            MAKE PURCHASE
          </Button>
      </div>
    )
};

export default CheckOutSummary;
