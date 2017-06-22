"use strict"
import {createStore} from 'redux';

// 3 reducers
const reducer = function (state={books:[]}, action) {
    switch (action.type) {
        case "POST_BOOK":
            let books  =  state.books.concat(action.payload)
            return {books};
            break;
    }
    return state

}

//  1 create the store
const store = createStore(reducer);
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
    type: "POST_BOOK",
    payload: [{
        id: 3,
        title: 'this is the book title 3',
        description: 'this is the book description 3 ',
        price: 33.33
    }]
});
