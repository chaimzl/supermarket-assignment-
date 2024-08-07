import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProductItem } from '../types/ProductItem.type'

const initialState: { data?: Array<ProductItem> } = {
    data:[]

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {    
        addToCart: (state, action: PayloadAction<ProductItem>) => {
            if (state?.data) {
                let existinProduct = state?.data?.find(f => f.id === action.payload.id);
                if(existinProduct)
                {
                    existinProduct.count=(existinProduct.count ||0)+1;
                }
                else {
                    state?.data?.push(action.payload)
                }

            }
        },
        emptyCart: (state) => {
          
                    state?.data?.splice(0, state?.data.length);
            }
       
    }
})

export const { addToCart,emptyCart } = cartSlice.actions

export default cartSlice.reducer