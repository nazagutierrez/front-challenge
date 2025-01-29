import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../lib/types'; 

interface ProductsState {
  products: Product[];
  loading: boolean,
  error: string | null;
  filteredProducts: Product[];
  priceFilter: number;
  ratingFilter: number;
  searchQuery: string, 
  page: number;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  filteredProducts: [],
  priceFilter: 0, 
  ratingFilter: 0,
  searchQuery: '',
  page: 1,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (page: number, thunkAPI) => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/nazagutierrez/front-challenge/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data: Product[] = await response.json();
      return data.slice(0, page * 10);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.products = [];
      state.page = 1;
    },
    setPriceFilter: (state, action: PayloadAction<number>) => {
      state.priceFilter = action.payload;
    },
    setRatingFilter: (state, action: PayloadAction<number>) => {
      state.ratingFilter = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    filterProducts: (state) => {
      state.filteredProducts = state.products.filter((product) => {
        return (
          product.name.includes(state.searchQuery) &&
          product.price >= state.priceFilter &&
          (state.ratingFilter === 0 || product.rating === state.ratingFilter)
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        console.error(action.payload);
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
  },
});

export const { setPriceFilter, setRatingFilter, filterProducts, setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
