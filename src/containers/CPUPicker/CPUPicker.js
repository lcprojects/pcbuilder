import React, {Component} from 'react';
import { connect } from "react-redux";

import ListItem from '../../Components/PC/ListItem/ListItem.js';

import classes from './CPUPicker.module.css';

class CPUPicker extends Component {

    
    buttonCLickHandler = (description, price) => {
        this.props.onPartAdd(description, price)
        this.props.history.push('/');
    }

    render () {
        return (
            <div className={classes.Frame}>
                <h1 className={classes.Title}>Choose a CPU</h1>
                <ul className={classes.List}>
                    {this.props.cpusList.map((cpu, index) => (<ListItem key={index} description={cpu.description} price={cpu.price} logo={cpu.logo} onAdd={this.buttonCLickHandler}/>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cpusList: state.partsList[0].list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPartAdd: (description, price) => dispatch({ type: 'ADDPART', payload: { description: description, price: price } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CPUPicker);