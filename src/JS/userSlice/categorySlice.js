    import { createSlice } from "@reduxjs/toolkit";

    const categorySlice = createSlice({
    name: "category",
    initialState: {
        selectedCategory: "all", // ✅ القيمة الافتراضية للفئة
    },
    reducers: {
        setCategory: (state, action) => {
        state.selectedCategory = action.payload; // ✅ تحديث الفئة المختارة
        },
    },
    });

    export const { setCategory } = categorySlice.actions;
    export default categorySlice.reducer;
