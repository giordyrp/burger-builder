import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './COSummary.module.css';

const coSummary = (props) => {
  return (
    <div className={classes.COSummary}>
        <h1>We hope it tastes well!</h1>
        <div style={{width: '100%', margin: 'auro'}}>
          <Burger ingredients={props.ingredients}/>
        </div>
        <Button 
          btnType="Danger"
          clicked={props.checkoutCancelled}>CANCEL</Button>
        <Button 
          btnType="Success"
          clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default coSummary;
