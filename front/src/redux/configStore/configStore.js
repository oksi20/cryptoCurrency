import { configureStore } from '@reduxjs/toolkit'

import coinsFullReducer from '../reducer/coinsFullListReducer'
import coinsPartialReducer from '../reducer/coinsPartialListReducer'
import userReducer from '../reducer/authReducer'
import cartReducer from '../reducer/cartReducer'

const store = configureStore({
  reducer: {
    coinspartial:coinsPartialReducer,
    coinsfull:coinsFullReducer,
    // error: errorReducer,
    // auth: authReducer
    user:userReducer,
    cart:cartReducer
  },
})

export default store
