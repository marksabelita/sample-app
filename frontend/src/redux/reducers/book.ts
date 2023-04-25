import { CREATE_BOOK,DELETE_BOOK,
GET_BOOK, GET_BOOKS, REFRESH_BOOK, UPDATE_BOOK } from '../../constant/actions';
  
const INIT_STATE = {
    error: '',
    loading: false,
    isAppDrawerOpen: false,
    updatingContent: false,
    message: '',
    bookLists: { data: []  },
    deleted: false,
    created: false,
    updated: false,
    book: null
};

const commonReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_BOOKS: 
            return  { 
                ...state, 
                created: false, 
                deleted: false,
                updated: false,
                books: action?.payload ?? [],
                book: null
            }

        case CREATE_BOOK:
            return { ...state, created: true }

        case UPDATE_BOOK:
            return { ...state, updated: true }
        
        case DELETE_BOOK:
            return { ...state, deleted: true }

        case GET_BOOK: 
            return {
                ...state, 
                book: action.payload,
                created: false, 
                deleted: false, 
                updated: false 
            }
        
        case REFRESH_BOOK: 
            return {
                created: false, 
                deleted: false, 
                updated: false 
            }
        
        default:
            return state;
    }
    
}

export default commonReducer;