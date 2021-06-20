import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGetAllUsers=createAsyncThunk(
  'stats/fetchGetAllUsers',
  async ()=>{
    const response=await fetch('/api/v1/statistic', {
    credentials: "include",
  })
  const result = await response.json();
  console.log('stats', result)
    return result;
}
)


export const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    loading:false,
    error:null,
    users:null,
    editedUsers:null,
  },
  reducers: {
    updateUsers:(state, action)=>{
      state.loading=false;
      state.editedUsers=action.payload;
    },

    
  },
  extraReducers:{
    [fetchGetAllUsers.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchGetAllUsers.fulfilled]:(state, {payload})=>{
      state.users=payload;
      state.loading=false; 
    },
    [fetchGetAllUsers.rejected]:(state, action)=>{
      state.error=action.payload.error;
      state.loading=false;
    },
  }
})

// Action creators are generated for each case reducer function
export const {updateUsers} = statsSlice.actions

export default statsSlice.reducer
