import React, { Component } from 'react';

import Button from '../../Components/UI/Button/Button.js';

import classes from './Checkout.module.css';

class Checkout extends Component {

    state = {
        name: {
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        address: {
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        postalCode: {
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    }
    
    onChange = (event, inputId) => {
        const newInputState = {
            ...this.state
        }
        newInputState[inputId].value = event.target.value;
        newInputState[inputId].valid = this.checkValidity(newInputState[inputId].value, newInputState[inputId].validation);
        newInputState[inputId].touched = true;

        this.setState(newInputState);
    }

    checkValidity = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim()  !== '';
        }

        return isValid;
    }

    pay = () => {
        const allValid = this.state.name.valid && this.state.email.valid && this.state.address.valid && this.state.postalCode.valid;

        if (allValid) {
            this.props.onPay();
        }
    }

    render () {
        const allValid = this.state.name.valid && this.state.email.valid && this.state.address.valid && this.state.postalCode.valid;
        
        return (
            <React.Fragment>
                <div className={classes.ModalContent}>
                    <form className={classes.Col}>
                        <label className={classes.Label} htmlFor="name">Name {!this.state.name.valid && this.state.name.touched ? <span className={classes.Invalid}>Required</span> : null}</label>
                        <input type="text" className={classes.Input} id="name" onChange={(event) => this.onChange(event, 'name')}></input>
                        <label className={classes.Label} htmlFor="email">Email {!this.state.email.valid && this.state.email.touched ? <span className={classes.Invalid}>Required</span> : null}</label>
                        <input type="email" className={classes.Input} id="email" onChange={(event) => this.onChange(event, 'email')}></input>
                        <label className={classes.Label} htmlFor="address">Address {!this.state.address.valid && this.state.address.touched ? <span className={classes.Invalid}>Required</span> : null}</label>
                        <input type="text" className={classes.Input} id="address" onChange={(event) => this.onChange(event, 'address')}></input>
                        <label className={classes.Label} htmlFor="postal-code">Postal Code {!this.state.postalCode.valid && this.state.postalCode.touched ? <span className={classes.Invalid}>Required</span> : null}</label>
                        <input type="text" className={classes.Input} id="postal-code" onChange={(event) => this.onChange(event, 'postalCode')}></input>
                    </form>
                    <div className={classes.Col}>
                        <ul className={classes.PartList}>
                            <h2 className={classes.ListTitle}>Parts List</h2>
                            {this.props.parts.map((part, index) => (
                                <li key={index}>{part.description} - <strong>${part.price}</strong></li>
                            ))}
                            <li className={classes.TotalPrice}>Total Price : <strong>${this.props.price.toLocaleString('en-US', {maximumFractionDigits: 2})}</strong></li>
                        </ul>
                    </div>
                </div>
                <div className={classes.AlignRight}>
                    <Button clicked={this.props.checkoutModalCancel}>Cancel</Button>
                    <Button clicked={this.pay} disabled={allValid ? null : 'disabled'}>Pay</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default Checkout;