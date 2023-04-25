
import { DEFAULT_ROUTES } from '@/constant/routes';

import { CREATE_COLLECTION, DELETE_COLLECTION, FETCH_ERROR, FETCH_START, FETCH_SUCCESS, GET_COLLECTION, GET_COLLECTIONS, SHOW_MESSAGE, UPDATE_COLLECTION } from '../../constant/actions';
import { displayErrorMessage } from '../../lib/error';
import { AdminApiConfig } from '../../services/AdminApiConfig';

export const onGetCollections = (pagination = null, filter = null) => {
	return (dispatch) => {
		const params = {};
		if(filter) { params['filter'] = filter; }

		if(pagination) {
			params['page'] = pagination['page'];
			params['limit'] = pagination['limit'];
		}

		dispatch({type: FETCH_START});

		AdminApiConfig.get(`${DEFAULT_ROUTES.COLLECTION}`, {params})
			.then((result) => {
				const { data } = result;
				if (result.status === 200) {
					dispatch({type: FETCH_SUCCESS});
					dispatch({type: GET_COLLECTIONS, payload: data });
				} 
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	};
};

export const onDeleteCollection = (id) => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.delete(`${DEFAULT_ROUTES.COLLECTION}/${id}`)
			.then((result) => {
				if (result.status === 200) {
					dispatch({type: DELETE_COLLECTION});
					dispatch({type: SHOW_MESSAGE, payload: 'Successfully deleted collectionmes' });
				} else {
					dispatch({ type: FETCH_ERROR, payload: displayErrorMessage(result) });
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	};
}


export const onCreateCollection = (data) => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.post(`${DEFAULT_ROUTES.COLLECTION}`, data)
			.then((result) => {
				const { message } = result.data;
				if (result.status === 201) {
					dispatch({type: CREATE_COLLECTION });
					dispatch({type: SHOW_MESSAGE, payload: 'Successfully created collection'});
				} else {
					dispatch({
						type: FETCH_ERROR,
						payload: displayErrorMessage(message),
					});
				}
			})
			.catch((error) => {
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(error)});
			});
	};
}

export const onGetCollection = (id) => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.get(`${DEFAULT_ROUTES.COLLECTION}/${id}`)
			.then((result) => {
				const { message } = result.data;
				if (result.status === 200) {
					dispatch({type: FETCH_SUCCESS});
					dispatch({type: GET_COLLECTION, payload: result.data });
				} else {
					dispatch({ type: FETCH_ERROR, payload: displayErrorMessage(message) });
				}
			})
			.catch((error) => {
				const { message } =  error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	}
}

export const onUpdateCollection = (id, data) => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.patch(`${DEFAULT_ROUTES.COLLECTION}/${id}`, data)
			.then((result) => {
				const { message } = result.data;
				if (result.status === 200) {
					dispatch({type: UPDATE_COLLECTION});
					dispatch({type: SHOW_MESSAGE, payload: 'Successfully updated collection'});
				} else {
					dispatch({ type: FETCH_ERROR, payload: displayErrorMessage(message) });
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	}
}


