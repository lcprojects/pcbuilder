import React from 'react';

import ToolbarAction from './ToolbarAction/ToolbarAction.js'

import classes from './ToolbarActions.module.css'

const toolbaractions = (props) => {
    return (
        <ul className={classes.ToolbarActions}>
            <ToolbarAction link="/" icon="fas fa-home">Home</ToolbarAction>
            <ToolbarAction link="/" icon="fas fa-user-plus">Sign Up</ToolbarAction>
            <ToolbarAction link="/" icon="fas fa-sign-in-alt">Log In</ToolbarAction>
        </ul>
    );
}

export default toolbaractions;