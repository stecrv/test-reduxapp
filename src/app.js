"use strict"
import {createStore} from 'redux';

import reducers from './reducers/index';
import {addToCart} from  './actions/cartActions';
import {postBooks, deleteBooks, updateBooks}  from './actions/booksActions';

//  1 create the store
const store = createStore(reducers);

store.subscribe(function () {
    console.log('current state is: ',
        store.getState());
});

// 2 create and dispatch actions
store.dispatch(postBooks(
    [{
        id: 1,
        title:'this is the book title',
        description: 'this is the book description',
        price: 33.33
    },
        {
            id: 2,
            title:'this is the second book title',
            description: 'this is the second book description',
            price: 50
        }]
))

store.dispatch(deleteBooks(
    {id: 1}
))

store.dispatch(updateBooks(
    {
        id: 2,
        title:'book 2 edited'
    }
))
//-->> CART ACTIONS <<--
store.dispatch(addToCart([{id: 1}]))
