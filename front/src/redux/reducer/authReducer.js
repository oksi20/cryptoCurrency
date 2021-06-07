import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGetCoinsList=createAsyncThunk(
  'user/fetchGetUser',
  async ()=>{
    const response=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    const result= await response.json()
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
    // userLoaded=(state, action)=>{
    //   state.loading=false;
    //   state.user=action.payload;
    // },


  },
  extraReducers:{
    [fetchGetUser.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchGetUser.fulfilled]:(state, {payload})=>{
      state.user=payload;
      state.loading=false;
    },
    [fetchGetUser.rejected]:(state, action)=>{
      state.error=action.error.message;
      state.loading=false;
    }
  }
})

// Action creators are generated for each case reducer function
// export const { download} = cryptoSlice.actions

export default coinsSlice.reducer
