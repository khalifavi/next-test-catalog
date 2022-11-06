
import { GET_PRODUCT, PRODUCT_ERROR } from "../types"

export const getProductData = () => async (dispatch: (arg0: { type: string; payload: string | number[]; }) => void) => {
    try {

        dispatch({
            type: GET_PRODUCT,
            payload: [1, 2, 3, 4, 5, 6],
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: "error message",
        })
    }
}
