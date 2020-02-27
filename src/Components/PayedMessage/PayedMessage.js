import React from 'react';

import Button from '../UI/Button/Button.js';

import classes from './PayedMessage.module.css';

const payedmessage = (props) => (
    <React.Fragment>
        <div className={classes.PayedMessage}>
            Payment Completed!
        </div>
        <div className={classes.AlignCenter}>
            <Button clicked={props.closeModal}>Close</Button>
        </div>
    </React.Fragment>
);

export default payedmessage;