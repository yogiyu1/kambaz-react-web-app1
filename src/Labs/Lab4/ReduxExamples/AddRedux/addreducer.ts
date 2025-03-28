import { createSlice } from '@reduxjs/toolkit';
const initialState ={ sum: 0 };
const addSlice = createSlice({
    name: "add",
    initialState,
    reducers: {
        add : (state, action) => {
            state.sum = action.payload.num1 + action.payload.num2;
        },
    },
});
export const { add } = addSlice.actions;
export default addSlice.reducer;