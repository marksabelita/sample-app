import { CREATE_COLLECTION,DELETE_COLLECTION,
GET_COLLECTION, GET_COLLECTIONS, UPDATE_COLLECTION } from '../../constant/actions';
  
const INIT_STATE = {
    error: '',
    loading: false,
    isAppDrawerOpen: false,
    updatingContent: false,
    message: '',
    collectionLists: { data: []  },
    deleted: false,
    created: false,
    updated: false,
    collection: null
};

const commonReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_COLLECTIONS: 
            return  { 
                ...state, 
                created: false, 
                deleted: false,
                updated: false,
                collections: action?.payload ?? [],
                collection: null
            }

        case CREATE_COLLECTION:
            return { ...state, created: true }

        case UPDATE_COLLECTION:
            return { ...state, updated: true }
        
        case DELETE_COLLECTION:
            return { ...state, deleted: true }

        case GET_COLLECTION: 
            return {
                ...state, 
                collection: action.payload,
                created: false, 
                deleted: false, 
                updated: false 
            }    
        
        default:
            return state;
    }
    
}

export default commonReducer;