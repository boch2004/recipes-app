import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getfavoris = createAsyncThunk("favoris/get", async () => {
    try {
        let result = axios.get("http://localhost:5000/favoris/")
        console.log("Response:", result);
        return result
    } catch (error) {
        console.log(error)
    }
})
export const addfavoris = createAsyncThunk("favoris/add", async (newfavoris) => {
    try {
        let result = axios.post("http://localhost:5000/favoris/add",newfavoris)
        console.log("Response:", result);
        return result
    } catch (error) {
        console.log(error)
    }
})

export const deletefavoris = createAsyncThunk("favoris/delete", async(id)=>{
    try {
        let result = axios.delete(`http://localhost:5000/favoris/${id}`)
        console.log("Response:", result);
        return result
    } catch (error) {
        console.log(error)
    }
})
export const editfavoris = createAsyncThunk("favoris/edit", async({id,edited})=>{
    try {
        let result = axios.put(`http://localhost:5000/favoris/${id}`,edited)
        console.log("Response:", result);
        return result
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    favorislist: [],
    status: null
}

export const favorisSlice = createSlice({
    name: 'favoris',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getfavoris.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getfavoris.fulfilled, (state, action) => {
                state.status = "success";
                state.favorislist = action.payload.data.favoris;
            })
            .addCase(getfavoris.rejected, (state) => {
                state.status = "fail";
            })
            .addCase(addfavoris.pending, (state) => {
                state.status = "pending";
            })
            .addCase(addfavoris.fulfilled, (state, action) => {
                state.status = "success";
            
            })
            .addCase(addfavoris.rejected, (state) => {
                state.status = "fail";
            })
            .addCase(deletefavoris.pending, (state) => {
                state.status = "pending";
            })
            .addCase(deletefavoris.fulfilled, (state, action) => {
                state.status = "success";
            
            })
            .addCase(deletefavoris.rejected, (state) => {
                state.status = "fail";
            })
            .addCase(editfavoris.pending, (state) => {
                state.status = "pending";
            })
            .addCase(editfavoris.fulfilled, (state, action) => {
                state.status = "success";
            
            })
            .addCase(editfavoris.rejected, (state) => {
                state.status = "fail";
            })
    },
})

// Action creators are generated for each case reducer function
export const { } = favorisSlice.actions

export default favorisSlice.reducer