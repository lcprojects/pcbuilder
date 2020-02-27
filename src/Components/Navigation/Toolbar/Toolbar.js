import React from 'react';

import ToolbarActions from '../ToolbarActions/ToolbarActions.js';

import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.Logo}>PC Builder</div>
            <nav className={classes.Navigation}>
                <ToolbarActions />
            </nav>
        </div>
    );
}

export default toolbar;