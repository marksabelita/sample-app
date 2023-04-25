import {combineReducers} from 'redux';

import Collection from './collection';
import Book from './book';

const reducers = combineReducers({
    collection: Collection,
    book: Book
});

export default reducers;
