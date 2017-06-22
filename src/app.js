"use strict"
import {createStore} from 'redux';

// 3 reducers
const reducer = function (state={books:[]}, action) {
    switch (action.type) {
        case "POST_BOOK":
            let books  =  state.books.concat(action.payload)
            return {books};
            break;
        case "DELETE_BOOK":
            const currentBookToDelete = [...state.books];

            const indexToDelete =  currentBookToDelete.findIndex(
                    function(book){
                        return book.id === action.payload.id;
                    }
                );

            return {books: [...currentBookToDelete.slice(0, indexToDelete),...currentBookToDelete.slice(indexToDelete + 1)]}
            break;
            case "UPDATE_BOOK":

                const currentBookToUpdate = [...state.books]

                const indexToUpdate = currentBookToUpdate.findIndex(
                        function(book){
                            return book.id === action.payload.id;
                        } )

                const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: action.payload.title}

                console.log("book to update", newBookToUpdate);

                return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
                break;
    }
    return state
};

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
