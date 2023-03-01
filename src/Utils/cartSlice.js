import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        clearItems:(state,action)=>{
            const item=action.payload;
            state.items=state.items.filter((value)=>value.id!=item.id);
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
    
})

export const {addItems,clearCart,clearItems}=cartSlice.actions;

export default cartSlice.reducer;