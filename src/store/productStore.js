import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCount } from "./cartStore";

// const getProductList = createAsyncThunk('action 이름', promise로 반환되는 callback함수);
// 비동기 함수를 처리할 때 그냥 쓰면 안 되고, createAsyncThunk 써야함
export const getProductList = createAsyncThunk(
  "product/getProductList", //action 이름
  async (category) => {
    // let url = `http://localhost:4000/products`;
    let url = `https://my-json-server.typicode.com/GGU940/shopTest/products`;
    if (category) {
      url += `?category=${category}`;
    }
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
);

let products = createSlice({
  name: "producs",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // 함수이름 : (state,action)=>{ },
    loadData: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.status = `loading`;
      }) //
      .addCase(getProductList.fulfilled, (state, action) => {
        state.status = `fullfilled`;
        state.products = action.payload;
      }) //
      .addCase(getProductList.rejected, (state, action) => {
        state.status = `failed`;
        state.error = action.error.message;
      });
  },
});

export const { extraReducers } = products.actions;
export default products;
