import { createSlice } from "@reduxjs/toolkit";

// import { cartData } from "./cartData";
let cartData = localStorage.getItem("cartData")
  ? JSON.parse(localStorage.getItem("cartData"))
  : [];

let cart = createSlice({
  name: "cart",
  initialState: cartData,
  reducers: {
    // 장바구니 아이템 추가
    addItem(state, action) {
      let num = state.findIndex((item) => {
        return item.id === action.payload;
      });
      if (num === -1) state.push(action.payload);
      if (num !== -1) state[num].count += action.payload.count;
      // console.log(state);
      localStorage.setItem("cartData", JSON.stringify(state));
    },
    // 장바구니 아이템 삭제
    deleteItem(state, action) {
      let num = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state.splice(num, 1);
      localStorage.setItem("cartData", JSON.stringify(state));
    },
    // 장바구니 수량 증가
    addCount(state, action) {
      let num = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[num].count++;
      localStorage.setItem("cartData", JSON.stringify(state));
    },
    // 장바구니 수량 감소
    minusCount(state, action) {
      let num = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[num].count--;
      localStorage.setItem("cartData", JSON.stringify(state));
    },
  },
});

export default cart;
export const { addItem, addCount, minusCount, deleteItem } = cart.actions;

// {
//   id: 6,
//   title: "14k/18k 티얼스 라운드 큐빅 여성 체인 목걸이",
//   img: "image6.jpg",
//   price: "310000",
//   category: "top",
//   discount: "5",
//   count: 3,
// },
