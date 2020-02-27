import React from 'react';

import classes from './ToolbarAction.module.css';

const toolbaraction = (props) => {
    return (
        <li className={classes.ToolbarAction}>
            <a href={props.link}><i className={props.icon}></i> {props.children}</a>
        </li>
    );
}

export default toolbaraction;