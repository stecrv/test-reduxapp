"use strict"
import React from 'react';
import {MenuItem, InputGroup, DropdownButton, Image, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBooks, deleteBooks, getBooks, resetButton} from '../../actions/booksActions';


class BooksForm extends React.Component{

  handleSubmit(){
    const book=[{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value,
    }]

      this.props.postBooks(book);
  }

  render(){
  return(
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl type="text" ref="title" placeholder="Enter Title" />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>description</ControlLabel>
            <FormControl type="text" ref="description" placeholder="Enter description" />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>price</ControlLabel>
            <FormControl type="text" ref="price" placeholder="Enter price" />
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary" >Add book</Button>
        </Panel>
      </Well>
    )
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postBooks},dispatch)
}
export default connect(null,mapDispatchToProps)(BooksForm)
