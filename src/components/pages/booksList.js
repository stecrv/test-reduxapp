"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col, Row, Button} from  'react-bootstrap';
class BooksList extends React.Component{
    componentDidMount(){
      this.props.getBooks()
    }
    render(){
        console.log('accessing to state', this.props.books)
        const booksList =
            this.props.books.map(function(booksArr){
                return(
                    <div key={booksArr.id}>
                        <h2>{booksArr.title}</h2>
                        <h2>{booksArr.description}</h2>
                        <h2>{booksArr.price}</h2>
                        <Button bsStyle='primary' >Buy</Button>
                    </div>
                )
            });
        return(
            <div>
                <h1>List of books</h1>
                <Grid style={{marginTop:'15px'}}>
                    <Row>
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