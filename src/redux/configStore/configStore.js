import { configureStore } from '@reduxjs/toolkit'

import cryptoReducer from '../reducer/cryptoReducer'
import coinsReducer from '../reducer/coinsReducer'

const store = configureStore({
  reducer: {
    crypto:cryptoReducer,
    coins:coinsReducer
  },
})

export default store
