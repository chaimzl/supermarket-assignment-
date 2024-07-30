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
                let existinProduct = state?.data?.find(f => f.ID === action.payload.ID);
                if(existinProduct)
                {
                    existinProduct.count=(existinProduct.count ||0)+1;
                }
                // if (existinProductIndex >= 0) 
                //     state.data.form.fields = state?.data.form.fields.map((x, index) =>
                //         index == fieldExistIndex ? action.payload : x
                //     )
                // }
                else {
                    state?.data?.push(action.payload)
                }

            }
        },
       
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer