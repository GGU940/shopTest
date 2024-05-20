import { createSlice } from "@reduxjs/toolkit";

// user 라는 보관통을 만든 것
let user = createSlice({
  name: "user", //사용할 변수 이름 등록하는 것임. 보통 let[이 변수명]과 같게 씀
  initialState: {
    // 변수 리스트 등록 / 외부에서 가져오기 가능
    username: "NaYoung",
    age: 22,
  },
});

export default user;
