import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Part.module.css';

const toolbaraction = (props) => {
    const disabledLink = props.disabled ? classes.Disabled : null;
    const disabledIcon = props.disabled ? classes.DisabledIcon : null;
    
    return (
        <div className={classes.Part}>
            <img src={props.icon} className={classes.PartIcon + ' ' + disabledIcon} alt={props.name}></img>
            <div className={classes.PartName}>{props.name}</div>
            <Link to={`/${props.name.toLowerCase().replace(' ', '-')}`} className={classes.Link + ' ' + disabledLink}>Choose</Link>
        </div>
    );
}

export default toolbaraction;