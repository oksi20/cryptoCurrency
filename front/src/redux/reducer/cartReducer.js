import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAddCarttoDB=createAsyncThunk(
  'cart/fetchAddCarttoDB',
  async ({cart, username})=>{
    const {id, amount, converted}=cart;
    const response=await fetch(`/cart/${username}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type":"application/json"
    },
    
    body: JSON.stringify({amount, converted, coinname:id})
  })
  const result = await response.json();
    return result;
}
)
export const fetchdeleteFromCart=createAsyncThunk(
  'cart/fetchdeleteFromCart',
  async ({id, username})=>{
    const response=await fetch(`/cart/${username}/${id}`, {
    method: "DELETE",
    credentials: "include",
  })
  const result = await response.json();
  if (result.result){
    return {id};
  } else {
    return result;
  }   
}
)

export const fetchDownloadCart=createAsyncThunk(
  'cart/fetchDownloadCart',
  async (username)=>{
    const response=await fetch(`/cart/${username}`, {
    credentials: "include",
  })
  const result = await response.json();
  console.log('result', result)
     return result;  
}
)
export const fetchPurchaseCoins=createAsyncThunk(
  'cart/fetchPurchaseCoins',
  async ({username})=>{
    console.log(username);
    const response=await fetch(`/cart/${username}`, {
      method:"PUT",
    credentials: "include",
  })
  const result = await response.json();
  console.log('result PUT', result)
     return result;  
}
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading:false,
    error:null,
    cart:[],
  },
  reducers: {
    clearCart:(state)=>{
      state.loading=false;
      state.cart=[];
    },

  },
  extraReducers:{
    [fetchAddCarttoDB.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchAddCarttoDB.fulfilled]:(state, {payload})=>{
      state.cart=payload;
      state.loading=false;
      
    },
    [fetchAddCarttoDB.rejected]:(state, action)=>{
      state.error=action.error.message;
      state.loading=false;
      
    },
    [fetchdeleteFromCart.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchdeleteFromCart.fulfilled]:(state, {payload})=>{
      const updatedArray=state.cart.filter(el=>el._id!==payload.id)
      if (payload.id){
          state.cart=updatedArray;
      }
      state.loading=false;
    },
    [fetchdeleteFromCart.rejected]:(state, action)=>{
      state.error=action.error.message;
      state.loading=false;
      
    },
    [fetchDownloadCart.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchDownloadCart.fulfilled]:(state, {payload})=>{
      state.cart=payload;
      state.loading=false;
    },
    [fetchDownloadCart.rejected]:(state, action)=>{
      state.error=action.error.message;
      state.loading=false;
      
    },
    
    [fetchPurchaseCoins.pending]:(state, action)=>{
      state.loading=true;
      state.error=null;
    },
    [fetchPurchaseCoins.fulfilled]:(state, {payload})=>{
      if (payload.res){
        state.cart=[]
      }
      state.loading=false;
    },
    [fetchPurchaseCoins.rejected]:(state, action)=>{
      state.error=action.error.message;
      state.loading=false;
      
    },
  }
})

// Action creators are generated for each case reducer function
// export const { addToCart, deleteFromCart} = cartSlice.actions
export const {clearCart} = cartSlice.actions
export default cartSlice.reducer
