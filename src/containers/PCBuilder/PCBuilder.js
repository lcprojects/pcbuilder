import React , {Component} from 'react';
import { connect } from "react-redux";

import PartPicker from '../../Components/PC/PartPicker/Partpicker.js';
import PartsTable from '../../Components/PC/PartsTable/PartsTable.js';
import Modal from '../../Components/UI/Modal/Modal.js';
import Backdrop from '../../Components/UI/Backdrop/Backdrop.js';
import Spinner from '../../Components/UI/Spinner/Spinner.js';
import Checkout from '../Checkout/Checkout.js';
import PayedMessage from '../../Components/PayedMessage/PayedMessage.js';

import classes from './PCBuilder.module.css';

class PCBuilder extends Component {

    state = {
        showCheckoutModal: false,
        loading: false,
        payed: false
    }

    showCheckoutModal = () => {
        this.setState({
            showCheckoutModal: true
        });
    }

    checkoutModalCancel = () => {
        this.setState({
            showCheckoutModal: false,
            payed: false
        });
    }

    backdropClose = () => {
        if (this.state.loading === false) {
            this.setState({
                showCheckoutModal: false,
                payed: false
            });
        }
    }

    onPay = () => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                payed: true
            });
        }, 2500);
    }

    render() {
        let modalContent;
        if (this.state.loading) {
            modalContent = <Spinner />;
        } else if (this.state.payed) {
            modalContent = <PayedMessage closeModal={this.checkoutModalCancel}/>;
        } else {
            modalContent = <Checkout parts={this.props.selectedParts} price={this.props.totalPrice} checkoutModalCancel={this.checkoutModalCancel} onPay={this.onPay}/>;
        }
        
        return (
            <div className={classes.PC}>
                <Backdrop show={this.state.showCheckoutModal} clicked={this.backdropClose}></Backdrop>
                {this.state.showCheckoutModal ? <Modal>{modalContent}</Modal> : null}
                <PartPicker partsList={this.props.parts} />
                <PartsTable selectedParts={this.props.selectedParts} deleteFromList={this.props.deleteFromList} totalPrice={this.props.totalPrice} onCheckoutClick={this.showCheckoutModal}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        parts: state.partsList,
        selectedParts: state.selectedParts,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFromList: (index, price) => dispatch({type: 'DELETEPART', index: index, price: price})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PCBuilder);