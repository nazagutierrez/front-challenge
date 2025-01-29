// productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../lib/types'; 

interface CartState {
  productsPrices: Product["price"][];
}

const initialState: CartState = {
    productsPrices: [],
};


const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<number>) => {
      state.productsPrices.push(action.payload);
    },
    clearCartItems: (state) => {
        state.productsPrices = [];
    },
    // cartAmount: (state, action: PayloadAction<string>) => {
      // aa
    // },
  },
});

export const {  addCartItem, clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;
