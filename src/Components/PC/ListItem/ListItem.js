import React from 'react';

import Button from '../../UI/Button/Button.js';

import classes from './ListItem.module.css';

const listitem = (props) => {
    return (
        <li className={classes.ListItem}>
            <img className={classes.Logo} src={props.logo} alt={props.logo} />
            <span>{props.description}</span>
            <span className={classes.Price}>${props.price}</span>
            <Button clicked={() => props.onAdd(props.description, props.price)}>Add</Button>
        </li>
    );
}

export default listitem;