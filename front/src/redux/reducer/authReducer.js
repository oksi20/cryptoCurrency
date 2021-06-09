import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRegisterUser=createAsyncThunk(
  'user/fetchRegisterUser',
  async ({username, email, password})=>{
    const response=await fetch('http://localhost:8000/signup', {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({email, username, password})
  })
  const result = await response.json();
  console.log(result)
    return result;
}
)
export const fetchLoginUser=createAsyncThunk(
  'user/fetchLoginUser',
  async ({username, password})=>{
    const response=await fetch('http://localhost:8000/login', {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({username, password})
  })
  const result = await response.json();
  console.log('result',result)
    return result;
}
)
export const fetchLogoutUser=createAsyncThunk(
  'user/fetchLogoutUser',
  async ()=>{
    const response=await fetch('http://localhost:8000/logout', {
      credentials: "include",
    })
  const result = await response.json();
    return result;
}
)

export const fetchGetCoins=createAsyncThunk(
  'user/fetchGetCoins',
  async (username)=>{
    const response=await fetch(`http://localhost:8000/${username}`, {
      credentials: "include",
    })
  const result = await response.json();
    return result;
}
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading:false,
    error:null,
    isAuthorised:false,
    user:{},
  },
  reducers: {
    


  },
  extraReducers:{
    [fetchRegisterUser.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchRegisterUser.fulfilled]:(state, {payload})=>{
      if (payload.error){
        state.error=payload;
      } else {
      state.user=payload;
      state.isAuthorised=true;
      }
      state.loading=false;
      
    },
    [fetchRegisterUser.rejected]:(state, action)=>{
      state.error=action.payload.error;
      state.loading=false;
      
    },
    [fetchLoginUser.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchLoginUser.fulfilled]:(state, {payload})=>{
      if (payload.err){
        state.error=payload.err;
      } else {
      state.user=payload;
      state.isAuthorised=true;
      }
      state.loading=false;
      
    },
    [fetchLoginUser.rejected]:(state, action)=>{
      console.log(action.payload)
      state.error=action.payload;
      state.loading=false;
      
    },
    [fetchLogoutUser.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchLogoutUser.fulfilled]:(state, {payload})=>{
      state.error=null;
      state.user={}
      state.isAuthorised=false;
      state.loading=false;
      
    },
    [fetchLogoutUser.rejected]:(state, action)=>{
      state.error=action.payload;
      state.loading=false;
      
    },
    [fetchGetCoins.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchGetCoins.fulfilled]:(state, {payload})=>{
      state.error=null;
      state.user={...state.user, coins:payload}
      state.loading=false;
      
    },
    [fetchGetCoins.rejected]:(state, action)=>{
      state.error=action.payload;
      state.loading=false;
      
    }
  }
})

// Action creators are generated for each case reducer function


export default userSlice.reducer
