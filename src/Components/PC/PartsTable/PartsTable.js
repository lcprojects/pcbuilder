import React from 'react';

import Button from '../../UI/Button/Button.js';

import classes from './PartsTable.module.css';

const partsTable = (props) => {
    return (
        <div className={classes.PartList}>
            <div className={classes.PartListHeader}>Parts Chosen</div>
            <table className={classes.PartTable}>
                <thead>
                    <tr>
                        <th>Part</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.selectedParts.map((part, index) => {
                        return (
                            <tr key={index}>
                                <td>{part.description}</td>
                                <td>${part.price}</td>
                                <td className={classes.ButtonTD}><Button clicked={() => props.deleteFromList(index, part.price)}><i className="fas fa-trash"></i></Button></td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td>Total price</td>
                        <td className={classes.TotalPrice} colSpan="2">${props.totalPrice.toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
                    </tr>
                </tbody>
            </table>
            <div className={classes.Checkout}>
                <Button clicked={props.onCheckoutClick} disabled={props.totalPrice <= 0 ? 'disabled' : null}>Checkout</Button>
            </div>
        </div>
    );
}

export default partsTable;