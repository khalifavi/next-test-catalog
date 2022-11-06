import { getProductData } from './actions/productAction';
import { createStore, AnyAction, Store, applyMiddleware } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import { Product } from '../types';

export interface State {
    productsData: Product[]
    productId: string | undefined
}

// middleware
const middleware = [thunk];

const reducer = (state: State = {
    productsData: [],
    productId: undefined,
}, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        case 'getProducts':
            return { ...state, ...action.payload }
        case 'getProduct':
            return { ...state, ...action.payload }
        default:
            return state
    }
};

const makeStore = (context: Context) => configureStore({ reducer: rootReducer, middleware });

// export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });

// // initial states here
// const initialState = {}

// // creating store
// export const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )
