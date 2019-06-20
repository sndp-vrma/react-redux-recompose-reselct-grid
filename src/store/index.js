import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { rows } from "../data"

export default function configureStore() {
	const initialState = {
	  app: {
	    moviesList: rows
	  }
	}
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}