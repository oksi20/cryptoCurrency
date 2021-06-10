import { configureStore } from '@reduxjs/toolkit'

import coinsFullReducer from '../reducer/coinsFullListReducer'
import coinsPartialReducer from '../reducer/coinsPartialListReducer'
import userReducer from '../reducer/authReducer'
import cartReducer from '../reducer/cartReducer'
import statsReducer from '../reducer/statsReducer'
const store = configureStore({
  reducer: {
    coinspartial:coinsPartialReducer,
    coinsfull:coinsFullReducer,
    // error: errorReducer,
    // auth: authReducer
    user:userReducer,
    cart:cartReducer,
    stats:statsReducer
  },
})

export default store
