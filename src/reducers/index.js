import { combineReducers } from 'redux'; // for multiple reducers
import libraryReducer from './libraryReducer'
import selectionReducer from './selectionReducer'
// Reducer - rerurn array
export default combineReducers({ // makes multiple reducers work nicly
    libraries: libraryReducer, // assign LibrayReducer as libraries
    selectedLibraryId: selectionReducer //state Object : value by default null
})
