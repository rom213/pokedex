import { createSlice } from "@reduxjs/toolkit";


 const arraypo=createSlice({
    name:'arraypoke',
    initialState:'romario',
    reducers:{
        setarraypoke:(state,action)=>action.payload
    }
 })


export const {setarraypoke}=arraypo.actions
export default arraypo.reducer