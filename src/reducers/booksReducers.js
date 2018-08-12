"use strict"

export  function  booksReducers(state = {
        books: [{
            _id: 1,
            title: 'this is the book title',
            description: 'this is the book description',
            price: 45.33
        },
        {
            _id: 2,
            title: 'this is the second book title',
            description: 'this is the second book description',
            price: 50
        }]
}, action) {
    switch (action.type) {
        case "GET_BOOKS":
            return {...state, books:[...state.books]};
            break;
        case "POST_BOOK":
            let latestID = state.books[state.books.length - 1]._id;
            action.payload[0]._id = latestID++;
            let books  =  state.books.concat(action.payload);
            return {books};
            break;
        case "DELETE_BOOK":
            const currentBookToDelete = [...state.books];

            const indexToDelete =  currentBookToDelete.findIndex(
                function(book){
                    return book._id === action.payload._id;
                }
            );

            return {books: [...currentBookToDelete.slice(0, indexToDelete),...currentBookToDelete.slice(indexToDelete + 1)]}
    break;
case "UPDATE_BOOK":

    const currentBookToUpdate = [...state.books]

    const indexToUpdate = currentBookToUpdate.findIndex(
        function(book){
            return book._id === action.payload._id;
        } )

    const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: action.payload.title}

    console.log("book to update", newBookToUpdate);

    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    break;
}
    return state
};
