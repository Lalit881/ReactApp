import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
    const response = await fetch(API_URL)
    return response.json();
})

export const addUser = createAsyncThunk('user/addUser', async (newUser) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    });
    return response.json();
})

export const updateUser = createAsyncThunk('user/updateUser', async ({id, updatedUser})=>{
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedUser)
    });
    return response.json();
})

export const deleteUser = createAsyncThunk('user/deleteUser', async (id)=>{
    const response = await fetch(`${API_URL}/${id}`, 
        {method: 'DELETE',});
        return id;
})

//  Slice---->
const userSlice = createSlice({
    name : 'users',
    initialState: {list: [], status: 'idle', error: null},
    reducers:{},
    extraReducers: (builder) => {
        builder
        //Fetch users
        .addCase(fetchUsers.pending, (state)=>{
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.list = action.payload;
        })
        .addCase(fetchUsers.rejected, (state)=>{
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(addUser.fulfilled, (state, action) =>{
            state.list.push({...action.payload, id: nanoid()})
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            // console.log(action.payload.id);
            const index = state.list.findIndex((u)=>u.id === action.payload.id)
            if(index !== -1){
                // console.log(action.payload);
                state.list[index] = action.payload;
            }
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.list = state.list.filter((u) => u.id !== action.payload)
        })
    }
});

export default userSlice.reducer;