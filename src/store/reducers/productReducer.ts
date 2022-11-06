import { GET_PRODUCT, PRODUCT_ERROR } from "../types"

const initialState = {
    products: [],
    loading: true,
    error: undefined,
}

const productsReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };

        case PRODUCT_ERROR:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default productsReducer
