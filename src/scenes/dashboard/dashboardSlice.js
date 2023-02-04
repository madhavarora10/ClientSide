import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    blockStatus: false,
}
const dashboardSlice = createSlice({
    name:"dashboard",
    initialState:initialState,
    reducers:{
        setBlockStatus(state,action){
            state.blockStatus = action.payload
            console.log(state.blockStatus)
        }
    }
})
export const {
    setBlockStatus,
} = dashboardSlice.actions
const dashboardReducer = dashboardSlice.reducer

export default dashboardReducer;