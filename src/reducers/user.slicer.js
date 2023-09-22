import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authSvc from "../pages/fe/auth/auth.service";

export const getLoggedInUser = createAsyncThunk(
    "user/getLoggedInUser",
   async (data, ThunkAPI) => {
        try {
            let response = await authSvc.getLoggedInuser()
            return response.data;
        } catch(exception) {
            throw exception;
        }
    }
);

const initialState = {
    loggedInUser: {}
}

export const UserSlicer = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        // functions to manipulate the state of user
        setUser: (state, action) => {
            // do not call api here
            state.loggedInUser = action.payload;
            // type => name/metodname
            // action => type, payload
        },
        
        getUser: (state, action) => {
            
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
            state.loggedInUser = action.payload
        })
        builder.addCase(getLoggedInUser.rejected, (state, action) => {
            //
            console.log("I am reject,", action)
        })
    }
});

export const {setUser} = UserSlicer.actions
export default UserSlicer.reducer;