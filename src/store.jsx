// store.jsx   เพื่อจัดการ store ของ Redux ที่เก็บของ ข้อมูลมาจาก product 
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice'; //ฟังก์ชันตัวนี้มาจากอีกไฟล์นึงที่ชื่อว่า Slice

const store = configureStore({
  reducer: {
    products: productReducer,  // เพิ่ม object เข้ามา
  },
});

export default store;

// ประกาศ store ก็เหมือนได้ร้านค้า 1 ร้าน จากนัน้สิ่งที่จะประกาศเพิ่มคือ product โดยใช้ Reducer