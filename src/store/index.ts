import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import currentUserSetting from './currentUserSetting'
import storage from 'redux-persist/es/storage';

const reducers  = combineReducers({
  currentUserSetting
})

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  reducers 
)


const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)


export default store