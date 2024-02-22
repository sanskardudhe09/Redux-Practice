
import { createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"
export const fetchUsers = createAsyncThunk("fetchUsers", async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
})
const userSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.isLoading = false;
            console.log(action.payload)
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.isError = true;
        });
    }
})

export default userSlice.reducer;