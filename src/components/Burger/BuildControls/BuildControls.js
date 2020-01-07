import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <div>Current price: <strong>{props.price.toFixed(2)}</strong></div>
      {controls.map( ctrl => (
        <BuildControl
         key={ctrl.label} 
         label={ctrl.label}
         added={() => props.ingredientAdded(ctrl.type)}
         removed={() => props.ingredientRemoved(ctrl.type)}
         disabled={props.disabled[ctrl.type]}
         />
      ))}
      <button 
        disabled={!props.purchasable} 
        className={classes.OrderButton}
        onClick={props.ordered}
        >{props.isAuthenticated ? 'ORDER NOW' : 'SIGN IN TO ORDER'}</button>
    </div>
  )
}

export default buildControls;
