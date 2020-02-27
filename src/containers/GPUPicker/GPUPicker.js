import React, {Component} from 'react';
import { connect } from "react-redux";

import ListItem from '../../Components/PC/ListItem/ListItem.js';

import classes from './GPUPicker.module.css';

class GPUPicker extends Component {

    buttonCLickHandler = (description, price) => {
        this.props.onPartAdd(description, price)
        this.props.history.push('/');
    }

    render () {
        return (
            <div className={classes.Frame}>
                <h1 className={classes.Title}>Choose a GPU</h1>
                <ul className={classes.List}>
                    {this.props.gpusList.map((gpu, index) => (<ListItem key={index} description={gpu.description} price={gpu.price} logo={gpu.logo} onAdd={this.buttonCLickHandler}/>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gpusList: state.partsList[1].list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPartAdd: (description, price) => dispatch({ type: 'ADDPART', payload: { description: description, price: price } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPUPicker);