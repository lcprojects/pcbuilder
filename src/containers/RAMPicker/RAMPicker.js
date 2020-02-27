import React, {Component} from 'react';
import { connect } from "react-redux";

import ListItem from '../../Components/PC/ListItem/ListItem.js';

import classes from './RAMPicker.module.css';

class RAMPicker extends Component {
    
    buttonCLickHandler = (description, price) => {
        this.props.onPartAdd(description, price)
        this.props.history.push('/');
    }
    
    render () {
        return (
            <div className={classes.Frame}>
                <h1 className={classes.Title}>Choose a RAM</h1>
                <ul className={classes.List}>
                    {this.props.ramsList.map((ram, index) => (<ListItem key={index} description={ram.description} price={ram.price} logo={ram.logo} onAdd={this.buttonCLickHandler}/>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ramsList: state.partsList[2].list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPartAdd: (description, price) => dispatch({ type: 'ADDPART', payload: { description: description, price: price } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RAMPicker);