"use strict"
import {createStore} from 'redux';

import reducers from './reducers/index';

//  1 create the store
const store = createStore(reducers);

store.subscribe(function () {
    console.log('current state is: ',
        store.getState());
    console.log('current price: ',
        store.getState().price);
});

// 2 create and dispatch actions
store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 33.33
    },{
        id: 2,
        title: 'this is the 2 book title',
        description: 'this is 2 the book description',
        price: 22.33
    }]
});

store.dispatch({
    type: "DELETE_BOOK",
    payload: {
        id: 1
    }
});

store.dispatch({
    type: "UPDATE_BOOK",
    payload: {
        id: 2,
        title: 'book 2 new title'
    }
});
