"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col, Row, Button} from  'react-bootstrap';
import BookItem from './bookItem';
import BooksForm from './BooksForm';
import Cart from './cart';


class BooksList extends React.Component{
    componentDidMount(){
      this.props.getBooks()
    }
    render(){
        console.log('accessing to state', this.props.books)
        const booksList =
            this.props.books.map(function(booksArr){
                return(
                    <Col xs={12} sm={6} md={4} key={booksArr.id}>
                        <BookItem
                            id={booksArr.id}
                            title={booksArr.title}
                            description={booksArr.description}
                            price={booksArr.price}
                        />
                    </Col>
                )
            });
        return(
            <div>
                <h1>List of books</h1>
                <Grid style={{marginTop:'15px'}}>
                    <Row>
                        <Cart />
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <BooksForm />
                        </Col>
                        {booksList}
                    </Row>
                </Grid>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        books: state.books.books
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getBooks: getBooks // other actions
    },dispatch)
}
export default  connect(mapStateToProps,mapDispatchToProps)(BooksList);