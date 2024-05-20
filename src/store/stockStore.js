import { createSlice } from "@reduxjs/toolkit";

let stock = createSlice({
  name: "stock",
  initialState: {
    pdstock: [18, 50, 130, 2, 66],
  },
});
export default stock;
