import React from 'react';

import classes from './Partpicker.module.css';

import Part from '../Part/Part.js';

const partpicker = (props) => {
    return (
        <div className={classes.PartPicker}>
            {props.partsList.map((part) => {
                return (
                    <Part key={part.name} name={part.name} icon={part.icon} disabled={part.disabled}/>
                );
            })}
        </div>
    );
}

export default partpicker;