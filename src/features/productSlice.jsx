// features/productSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Product 1', price: '$10', description: 'This is the first product.' },
  { id: 2, name: 'Product 2', price: '$20', description: 'This is the second product.' },
  { id: 3, name: 'Product 3', price: '$30', description: 'This is the third product.' },
  { id: 4, name: 'Product 4', price: '$40', description: 'This is the fourth product.' },
  { id: 5, name: 'Product 5', price: '$50', description: 'This is the fifth product.' },
];

const productSlice = createSlice({
  name: 'products', //ตรงนี้คือตัวแปร ชื่อ products
  initialState,
  reducers: {
    addProduct: (state, action) => { //อันนี้คือฟังก์ชันเพื่อให้ทำอะไร
      state.push(action.payload); //payload คือข้อมูลที่ใส่เข้ามา จะมาจากฟอร์มหรือจะมาจากอะไรก็แล้วแต่
    },
    removeProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload); //state คือมาจากข้อมูลด้านผล เพื่อลบมันทิ้งซะ
    },
  },
});

// สร้าง action creators
export const { addProduct, removeProduct } = productSlice.actions;

// สร้าง reducer
export default productSlice.reducer; //reducer ไปแมทช์กับ store


// สามารถปรับได้ ดึงข้อมูลจากที่อื่นได้ โดยมีฟังก์ชัน Add กับ Remove  โดยฟังก์ชันชื่อ Products