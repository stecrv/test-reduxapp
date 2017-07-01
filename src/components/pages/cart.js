"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';
import {deleteCartItem, updateCart, getCart} from '../../actions/cartActions';
import {bindActionCreators} from 'redux';

class Cart extends React.Component {

    onDelete(_id){
        const currentBookToDelete = this.props.cart;

        const indexToDelete =  currentBookToDelete.findIndex(
            function(cart){
                return cart._id === _id;
            }
        );

        let cartAfterDelete =  [...currentBookToDelete.slice(0, indexToDelete),...currentBookToDelete.slice(indexToDelete + 1)];

        this.props.deleteCartItem(cartAfterDelete)
    }
    onIncrement(_id){
        this.props.updateCart(_id, 1, this.props.cart);
    }
    onDecrement(_id, quantity){
        if(quantity > 1){
            this.props.updateCart(_id, -1, this.props.cart);
        }
    }
    render() {
        if (this.props.cart[0]) {
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }

    renderEmpty() {
        return (<div></div>)
    }

    renderCart() {
        const cartItemsList = this.props.cart.map(function(cartArr) {
            return (
                <Panel key={cartArr._id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{cartArr.title}</h6><span>    </span>
                        </Col>
                        <Col xs={12} sm={4}>
                            <h6>USD. {cartArr.price}</h6><span>    </span>
                        </Col>
                        <Col xs={6} sm={4}>
                            <h6>quantity <Label>{cartArr.quantity}</Label></h6><span>    </span>
                        </Col>
                        <ButtonGroup style={{minWidth:'300px'}} >
                            <Button bsStyle="default" bsSize="small" onClick={ this.onDecrement.bind(this, cartArr._id, cartArr.quantity) }>-</Button>
                            <Button bsStyle="default" bsSize="small" onClick={ this.onIncrement.bind(this, cartArr._id)}>+</Button>
                            <span>    </span>
                            <Button bsStyle="danger" bsSize="small" onClick={this.onDelete.bind(this, cartArr._id)}>Remove</Button>
                        </ButtonGroup>
                    </Row>
                </Panel>
            )
        }, this);

        return (
            <Panel>{cartItemsList}</Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        deleteCartItem: deleteCartItem,
        updateCart: updateCart
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)