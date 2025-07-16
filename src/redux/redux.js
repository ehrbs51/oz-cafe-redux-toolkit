// src/redux/redux.js
import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from '../assets/data'

// 메뉴 Slice
const menuSlice = createSlice({
  name: 'menu',
  initialState: data.menu,
  reducers: {}
})

// 장바구니 Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer
  }
})

export default store
