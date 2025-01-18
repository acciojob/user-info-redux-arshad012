import { createSlice } from '@reduxjs/toolkit';

const UserInfoSlice = createSlice({
    name: 'user info',
    initialState: {
        name:'',
        email:''
    },
    reducers: {
        addName: (state, action) => {
            state.name = action.payload;
        },
        addEmail: (state, action) => {
            state.email = action.payload;
        }
    }
})

export const {addName, addEmail} = UserInfoSlice.actions;
export default UserInfoSlice.reducer;