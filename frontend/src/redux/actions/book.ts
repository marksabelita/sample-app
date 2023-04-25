
import { DEFAULT_ROUTES } from '@/constant/routes';

import { CREATE_BOOK, DELETE_BOOK, FETCH_ERROR, FETCH_START, FETCH_SUCCESS, GET_BOOK, GET_BOOKS, SHOW_MESSAGE, UPDATE_BOOK } from '../../constant/actions';
import { displayErrorMessage } from '../../lib/error';
import { AdminApiConfig } from '../../services/AdminApiConfig';

export const onGetBooks = (pagination = null, filter = null) => {
	return (dispatch) => {
		const params = {};
		if(filter) { params['filter'] = filter; }

		if(pagination) {
			params['page'] = pagination['page'];
			params['limit'] = pagination['limit'];
		}

		dispatch({type: FETCH_START});

		AdminApiConfig.get(`${DEFAULT_ROUTES.BOOK}`, {params})
			.then((result) => {
				const { data } = result;
				if (result.status === 200) {
					dispatch({type: FETCH_SUCCESS});
					dispatch({type: GET_BOOKS, payload: data });
				} 
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch({type: FETCH_ERROR, payload: displayErrorMessage(message)});
			});
	};
};

export const onDeleteBook = (id) => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.delete(`${DEFAULT_ROUTES.BOOK}/${id}`)
			.then((result) => {
				if (result.status === 200) {
					dispatch({type: DELETE_BOOK});
					dispatch({type: SHOW_MESSAGE, payload: 'Successfully deleted bookmes' });
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


export const onCreateBook = (data) => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.post(`${DEFAULT_ROUTES.BOOK}`, data)
			.then((result) => {
				const { message } = result.data;
				if (result.status === 201) {
					dispatch({type: CREATE_BOOK });
					dispatch({type: SHOW_MESSAGE, payload: 'Successfully created book'});
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

export const onGetBook = (id) => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.get(`${DEFAULT_ROUTES.BOOK}/${id}`)
			.then((result) => {
				const { message } = result.data;
				if (result.status === 200) {
					dispatch({type: FETCH_SUCCESS});
					dispatch({type: GET_BOOK, payload: result.data });
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

export const onUpdateBook = (id, data) => {
	return (dispatch) => {
		dispatch({type: FETCH_START});

		AdminApiConfig.patch(`${DEFAULT_ROUTES.BOOK}/${id}`, data)
			.then((result) => {
				const { message } = result.data;
				if (result.status === 200) {
					dispatch({type: UPDATE_BOOK});
					dispatch({type: SHOW_MESSAGE, payload: 'Successfully updated book'});
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


