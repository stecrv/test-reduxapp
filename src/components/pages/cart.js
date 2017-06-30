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
        const cartItemsList = this.props.cart.map(function (cartArr) {
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
                            <h6>quantity <Label> </Label></h6><span>    </span>
                        </Col>
                        <ButtonGroup style={{minWidth:'300px'}} >
                            <Button bsStyle="default" bsSize="small">-</Button>
                            <Button bsStyle="default" bsSize="small">+</Button>
                            <span>    </span>
                            <Button bsStyle="danger" bsSize="small" onClick={this.onDelete.bind(this, cartArr._id)}>Remove</Button>
                        </ButtonGroup>
                    </Row>
                </Panel>
            )
        }, this)
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
        deleteCartItem: deleteCartItem // other actions
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)