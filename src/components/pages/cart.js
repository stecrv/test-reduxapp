"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';
import {deleteCartItem, updateCart, getCart} from '../../actions/cartActions';

class Cart extends React.Component {
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
                    </Row>
                </Panel>
            )
        })
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


export default connect(mapStateToProps,null)(Cart)