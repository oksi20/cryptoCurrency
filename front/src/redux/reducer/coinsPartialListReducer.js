import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGetCrypto=createAsyncThunk(
  'coinspartial/fetchGetCrypto',
  async ()=>{
      const response=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=21&page=1&sparkline=false")
    const result= await response.json()
    // console.log(result)
    return result;
  }
)
export const fetchGetDetailCoin=createAsyncThunk(
  'coinspartial/fetchGetDetailCoin',
  async (id)=>{
      const response=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    const result= await response.json()
    console.log('coin', result)
    return result;
  }
)


export const cryptoSlice = createSlice({
  name: 'coinspartial',
  initialState: {
    value: [],
    loading:false,
    error:null,
    cryptoArray:[],
    coin:[]
  },
  reducers: {

  },
  extraReducers:{
    [fetchGetCrypto.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchGetCrypto.fulfilled]:(state, {payload})=>{
      state.cryptoArray=payload;
      state.loading=false;
    },
    [fetchGetCrypto.rejected]:(state, action)=>{
      state.error=action.error.message;
      state.loading=false;
    },
    [fetchGetDetailCoin.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchGetDetailCoin.fulfilled]:(state, {payload})=>{
      state.coin=payload;
      state.loading=false;
    },
    [fetchGetDetailCoin.rejected]:(state, action)=>{
      state.error=action.error.message;
      state.loading=false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { download} = cryptoSlice.actions

export default cryptoSlice.reducer










// const response=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin-cash%2C%20bitcoin%2C%20ethereum%2C%20polkadot%2C%20dogecoin%2C%20cardano%2C%20tether%2C%20internet-computer%2C%20binance-coin&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      // 'https://rest.coinapi.io/v1/assets?apikey=1E79CB78-C93F-471E-9EB5-0823C358C960'
