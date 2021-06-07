import { configureStore } from '@reduxjs/toolkit'

import coinsFullReducer from '../reducer/coinsFullListReducer'
import coinsPartialReducer from '../reducer/coinsPartialListReducer'

const store = configureStore({
  reducer: {
    coinspartial:coinsPartialReducer,
    coinsfull:coinsFullReducer,
    // error: errorReducer,
    // auth: authReducer
  },
})

export default store
