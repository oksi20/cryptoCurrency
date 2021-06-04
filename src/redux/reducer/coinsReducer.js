import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGetCoinsList=createAsyncThunk(
  'coins/fetchGetCoinsList',
  async ()=>{
    const response=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    const result= await response.json()
    // console.log(result)
    return result;
  }
)

export const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    loading:false,
    error:null,
    coinsList:[]
  },
  reducers: {

  },
  extraReducers:{
    [fetchGetCoinsList.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchGetCoinsList.fulfilled]:(state, {payload})=>{
      state.coinsList=payload;
      state.loading=false;
    },
    [fetchGetCoinsList.rejected]:(state, action)=>{
      state.error=action.error.message;
      state.loading=false;
    }
  }
})

// Action creators are generated for each case reducer function
// export const { download} = cryptoSlice.actions

export default coinsSlice.reducer
