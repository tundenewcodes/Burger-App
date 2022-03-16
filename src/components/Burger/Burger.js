import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    let recievedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return  <BurgerIngredients type = {ingredientKey}  key = {ingredientKey + 1}/>
        })
        })
        .reduce((prevEl, currentEl) => {
        return prevEl.concat(currentEl) 
        }, [])

    if (recievedIngredients.length === 0) {
        recievedIngredients = <p>please add some ingredients</p>
    }
    
    return (
      <div className={classes.Burger}>
        <BurgerIngredients type="bread-top" />
        {recievedIngredients}
        <BurgerIngredients type="bread-bottom" />
      </div>
    )
};

export default Burger
